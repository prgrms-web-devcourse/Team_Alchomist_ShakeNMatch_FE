import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import {
  SectionDividerWithTitle,
  CocktailList,
  IngredientCarousel,
  IngredientSelectModal
} from '@domain';
import { StyledIngredientContainer } from './styled';
import { Text } from '@base';
import { TextButton } from '@compound';
import type { ICocktail, IIngredient, IApiResponse } from '@models/types';
import { useAuthorization } from '@contexts';
import { useJangoContext } from '@contexts/Jango';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const JangoPage = (): ReactElement => {
  const [ingredients, setIngredients] = useState<{
    main: IIngredient[];
    sub: IIngredient[];
  }>({
    main: [],
    sub: []
  });

  const [recommendedCocktails, setRecommendedCocktails] = useState<ICocktail[]>(
    []
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useAuthorization();
  const { userIngredients, totalIngredientsList, updateJangoContext } =
    useJangoContext();

  useEffect(() => {
    const mainIngredients: IIngredient[] = [];
    const subIngredients: IIngredient[] = [];

    userIngredients.forEach((ingredient) => {
      ingredient.alcohol
        ? mainIngredients.push(ingredient)
        : subIngredients.push(ingredient);
    });

    setIngredients({
      main: mainIngredients,
      sub: subIngredients
    });
  }, [userIngredients]);

  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  const getCocktailByIngredients = (
    ingredients: number[]
  ): Promise<IApiResponse<{ cocktails: ICocktail[] }>> => {
    return request.post('/user/ingredient', ingredients);
  };

  useEffect(() => {
    const mainIngredientsId = ingredients.main.map(
      (ingredient) => ingredient.id
    );
    const subIngredientsId = ingredients.sub.map((ingredient) => ingredient.id);

    const userIngredientsId = [...mainIngredientsId, ...subIngredientsId];

    const setRecommendedCocktailsByIngredients = async (): Promise<void> => {
      const recommendedCocktails = await getCocktailByIngredients(
        userIngredientsId
      );

      setRecommendedCocktails(recommendedCocktails.data.cocktails);
    };

    setRecommendedCocktailsByIngredients();
  }, [ingredients]);
  // IngredientSelectModal을 관리하는 상태가 있다. '내 재료 수정하기' 버튼을 통해 모달을 제어한다.

  // 모달에서 재료 업데이트가 일어나면 -> 서버에 반영 -> 성공시 반영된 새로운 배열을 응답받는다 -> 응답받은 배열을 컨텍스트에 추가
  // -> 컨텍스트의 myIngredient를 통해 술장고 페이지 리렌더

  const openModal = (): void => {
    setIsModalVisible(true);
  };
  const closeModal = (): void => {
    setIsModalVisible(false);
  };

  const updateUserIngredients = (
    userId: number,
    selectedIngredients: number[]
  ): Promise<IApiResponse<string>> => {
    return request.post(`/user/ingredient/${userId}`, selectedIngredients);
  };

  const handleSelectDone = async (
    selectedIngredients: number[]
  ): Promise<void> => {
    // 선택된 애들을 서버에 저장
    user?.id && (await updateUserIngredients(user?.id, selectedIngredients));

    // 낙관적 업데이트를 위해 장고 컨텍스트에 선택된 재료 전달
    const recentIngredients = selectedIngredients.map(
      (id) => totalIngredientsList[id]
    );

    if (recentIngredients !== userIngredients) {
      updateJangoContext(recentIngredients);
    }

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
            itemList={ingredients.main}
            row='single'
          />
          <Text>감미료</Text>
          <IngredientCarousel
            albumType='sweetener'
            itemList={ingredients.sub}
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
        initialMainIngredient={ingredients.main.map(
          (ingredient) => ingredient.id
        )}
        initialSubIngredient={ingredients.sub.map(
          (ingredient) => ingredient.id
        )}
        visible={isModalVisible}
        onClose={closeModal}
        onSelectDone={handleSelectDone}
      />
    </>
  );
};

export default JangoPage;
