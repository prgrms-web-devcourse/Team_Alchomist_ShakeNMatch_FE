import { ShoppingItem, TitleSectionContainer } from '@domain';
import { Children, useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { StyledContainer } from './styled';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShoppingPage = (): ReactElement => {
  const params = useParams();
  console.log('keyword: ', params, params.keyword);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 네이버 쇼핑 API 가져오기.
  const fetchData = async (): Promise<void> => {
    try {
      setError(null);
      setData([]);
      setLoading(true);
      const response = await axios.get('/v1/search/shop.json?', {
        params: {
          query: params.keyword,
          display: 100
        },
        headers: {
          'X-Naver-Client-Id': 'CRC7XaD__8BI4e9pZ87T',
          'X-Naver-Client-Secret': 'bqPZbC4akN'
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

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터를 불러오지 못했습니다.</div>;

  // API 연동한 후에 리스트로 뿌려주기.
  const shoppingItemList = Children.toArray(
    data.map((shoppingItem) => (
      <ShoppingItem
        imageSrc={shoppingItem.image}
        price={shoppingItem.lprice}
        title={shoppingItem.title}
        vendor={shoppingItem.mallName}
        // 리펙토링 할 것.
        onClick={(): void => {
          window.open(
            shoppingItem.link,
            '_blank',
            'fullscreen=no, width=1000, height=500, centerscreen=yes, left=100, top=100'
          );
        }}
      ></ShoppingItem>
    ))
  );

  // 팝업을 띄워주는 함수.
  // const openPopup = (
  //   popupWidth: number,
  //   popupHeight: number,
  //   popupUrl: string
  // ): void => {
  //   const width = popupWidth;
  //   const height = popupHeight;
  //   const top = (window.innerHeight - height) / 2 + screenY;
  //   const left = (window.innerWidth - width) / 2 + screenX;

  //   let spec = 'status=no, menubar=no, toolbar=no, resizable=no';
  //   spec += ', width=' + width + ', height=' + height;
  //   spec += ', top=' + top + ', left' + left;

  //   window.open(popupUrl, 'popup', spec);
  // };

  return (
    <>
      {/* <button type='button' onClick={fetchData}>
        네이버 검색 API 불러오기
      </button> */}
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
