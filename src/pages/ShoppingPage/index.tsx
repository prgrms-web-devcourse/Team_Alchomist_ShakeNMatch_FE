import { ShoppingItem, TitleSectionContainer } from '@domain';
import { Children, useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { StyledContainer } from './styled';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShoppingPage = (): ReactElement => {
  const params = useParams();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 네이버 쇼핑 API 가져오기.
  const fetchData = async (): Promise<void> => {
    try {
      setError(null);
      setData([]);
      setLoading(true);
      // 무한 스크롤 리펙토링 해보기.
      const response = await axios.get('/naverShop', {
        params: {
          query: params.keyword,
          display: 100
        }
      });
      setData(response.data.items);
      console.log(data);
    } catch (e: unknown) {
      console.error(e);
    }
    setLoading(false);
  };

  // 실행 시점에서 렌더링하기.
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터를 불러오지 못했습니다.</div>;

  // 팝업 생성 함수.
  const openPopup = (
    popupWidth: number,
    popupHeight: number,
    popupUrl: string
  ): void => {
    const top = (window.innerHeight - popupHeight) / 2 + screenY;
    const left = (window.innerWidth - popupWidth) / 2 + screenX;
    let spec = 'status=no, menubar=no, toolbar=no, resizable=no';
    spec += ', width=' + popupWidth + ', height=' + popupHeight;
    spec += ', top=' + top + ', left=' + left;
    window.open(popupUrl, 'popup', spec);
  };

  // 팝업 창 크기 조절.
  const WINDOW_WIDTH_SIZE = 1000;
  const WINDOW_HEIGHT_SIZE = 500;

  // API 연동한 부분 리스트로 뿌려주기.
  const shoppingItemList = Children.toArray(
    data.map((shoppingItem) => (
      <ShoppingItem
        imageSrc={shoppingItem.image}
        price={shoppingItem.lprice}
        title={shoppingItem.title}
        vendor={shoppingItem.mallName}
        // ShoppingItem 컴포넌트에서 리펙토링 해보기.
        onClick={(): void => {
          openPopup(WINDOW_WIDTH_SIZE, WINDOW_HEIGHT_SIZE, shoppingItem.link);
        }}
      />
    ))
  );

  return (
    <>
      <StyledContainer>
        <TitleSectionContainer
          alignItems={true}
          bold={true}
          dividerColor='BLACK'
          dividerThickness='5px'
          dividerVisible={true}
          dividerWidth='200px'
          gap='20px'
          style={{ marginTop: 50 }}
          titleSize='lg'
          titleText='부족한 재료를 채워보세요!'
        >
          <div>{shoppingItemList}</div>
        </TitleSectionContainer>
      </StyledContainer>
    </>
  );
};

export default ShoppingPage;
