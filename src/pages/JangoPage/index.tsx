import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import SectionDividerWithTitle from '@domain/SectionDividerWithTitle';
import CocktailList from '@domain/CocktailList';
import IngredientCarousel from '@domain/IngredientCarousel';
import { StyledIngredientContainer } from './styled';
import { Text } from '@base';
import TextButton from '@compound/TextButton';
import type { IIngredient } from '@models/types';
import IngredientSelectModal from '@domain/IngredientSelectModal';
import { useJangoContext } from '@contexts/Jango';

// 컨텍스트 : 유저의 myIngredients 배열 필요
const myIngredients = [
  {
    id: 1,
    name: '깔루아',
    type: 'whiskey',
    alcohol: true,
    measure: '',
    cocktails: []
  },
  {
    id: 2,
    name: '극상 설탕',
    type: 'sugar',
    alcohol: false,
    measure: '',
    cocktails: []
  },
  {
    id: 3,
    name: '레몬 주스',
    type: 'syrup',
    alcohol: false,
    measure: '',
    cocktails: []
  }
];

// 추천 결과 응답 데이터
const recommended = [
  {
    id: 1,
    name: '마티니',
    themes: [],
    reviews: [],
    recipe: '',
    type: '',
    likes: 0,
    totalRating: '',
    ingredients: [],
    volume: []
  },
  {
    id: 2,
    name: '블러디 매리',
    themes: [],
    reviews: [],
    recipe: '',
    type: '',
    likes: 0,
    totalRating: '',
    ingredients: [],
    volume: []
  },
  {
    id: 3,
    name: '아메리카노',
    themes: [],
    reviews: [],
    recipe: '',
    type: '',
    likes: 0,
    totalRating: '',
    ingredients: [],
    volume: []
  }
];

const JangoPage = (): ReactElement => {
  const [mainIngredients, setMainIngredients] = useState<IIngredient[]>([]);
  const [subIngredients, setSubIngredients] = useState<IIngredient[]>([]);
  // 추후 ICocktail[] 로 수정
  const [recommendedCocktails, setRecommendedCocktails] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { userIngredients, updateJangoContext } = useJangoContext();
  // 에러 방지
  console.log(userIngredients, updateJangoContext);

  // console.log(recommendedCocktails);
  console.log(mainIngredients, subIngredients);
  useEffect(() => {
    // 컨텍스트에서 유저의 myIngredients를 받아온다.
    // userIngredients
    const DUMMY_INGREDIENT = myIngredients;

    const initialMainIngredients: IIngredient[] = [];
    const initialSubIngredients: IIngredient[] = [];
    const initialSelectedIngredients: number[] = [];

    DUMMY_INGREDIENT.forEach((ingredient) => {
      if (ingredient.alcohol) {
        initialMainIngredients.push(ingredient);
      } else {
        initialSubIngredients.push(ingredient);
      }

      initialSelectedIngredients.push(ingredient.id);
    });

    setMainIngredients(initialMainIngredients);
    setSubIngredients(initialSubIngredients);

    // 해당 재료들로 추천받을 칵테일 리스트를 api 호출한다
    console.log(initialSelectedIngredients, '얘네로 만들 수 있는 칵테일 호출!');
    // 응답받은 데이터를 칵테일 리스트에 뿌려준다
    const res = recommended;
    setRecommendedCocktails(res);
  }, []);

  // 해당 재료들을 가지고 복수 재료 기반 api 요청을 통해 만들 수 있는 칵테일 리스트를 받아온다. => CocktailList에 내려준다.

  // myIngredients를 주재료와 부재료로 구분하여 싱글 캐러셀(주재료), 더블 캐러셀(부재료)에 뿌려준다.

  // IngredientSelectModal을 관리하는 상태가 있다. '내 재료 수정하기' 버튼을 통해 모달을 제어한다.

  // 모달에서 재료 업데이트가 일어나면 -> 서버에 반영 -> 성공시 반영된 새로운 배열을 응답받는다 -> 응답받은 배열을 컨텍스트에 추가
  // -> 컨텍스트의 myIngredient를 통해 술장고 페이지 리렌더

  const openModal = (): void => {
    setIsModalVisible(true);
  };
  const closeModal = (): void => {
    setIsModalVisible(false);
  };

  const handleSelectDone = async (
    selectedIngredients: number[]
  ): Promise<void> => {
    // 선택된 애들을 서버에 저장
    // context 에서 유저 id 받아온다.
    // const userId = '';
    // const recentUpdatedIngredient = await updateUserIngredients(userId, selectedIngredients);
    // 서버에 정상 등록되면, 등록된 칵테일 배열이 응답된다.
    // 이걸 컨텍스트에 저장해놓고 이 페이지에 접근할 때마다 존재하는지 확인해서 렌더링 시키자.
    // 이때 기존 컨텍스트의 배열과 비교하여 다른 경우에만 업데이트 시켜주자
    //
    // if (recentUpdatedIngredient !== userIngredients) {
    //   updateJangoContext(recentUpdatedIngredient);
    // }

    console.log(selectedIngredients, '선택된 애들을 서버에 저장');

    closeModal();
  };

  return (
    <>
      <SectionDividerWithTitle
        titleText='가지고 계신 재료로 레시피를 추천 받아 보세요!'
        withHeader
      >
        <StyledIngredientContainer style={{ width: '100%', height: '100%' }}>
          <Text>알콜</Text>
          <IngredientCarousel
            albumType='alcohol'
            itemList={mainIngredients}
            row='single'
          />
          <Text>감미료</Text>
          <IngredientCarousel
            albumType='sweetener'
            itemList={subIngredients}
            row='double'
          />
          <TextButton buttonType='LONG_PINK' onClick={openModal}>
            내 재료 수정하기
          </TextButton>
        </StyledIngredientContainer>
        <CocktailList
          cocktailList={recommendedCocktails.map((cocktail) => ({
            id: cocktail.id,
            name: cocktail.name,
            type: 'whiskey'
          }))}
        />
      </SectionDividerWithTitle>
      <IngredientSelectModal
        initialMainIngredient={mainIngredients.map(
          (ingredient) => ingredient.id
        )}
        initialSubIngredient={subIngredients.map((ingredient) => ingredient.id)}
        visible={isModalVisible}
        onClose={closeModal}
        onSelectDone={handleSelectDone}
      />
    </>
  );
};

export default JangoPage;
