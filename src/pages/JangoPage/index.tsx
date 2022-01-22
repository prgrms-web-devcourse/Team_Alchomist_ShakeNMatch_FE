import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import {
  SectionDividerWithTitle,
  CocktailList,
  IngredientCarousel,
  IngredientSelectModal,
  SearchBot,
  HeaderPageTemplate
} from '@domain';
import { StyledIngredientContainer, StyledTextButton } from './styled';
import { Text } from '@base';
import type { ICocktail, IIngredient, IApiResponse } from '@models/types';
import { useAuthorization } from '@contexts';
import useSessionStorage from '@hooks/useSessionStorage';
import useAxios from '@hooks/useAxios';
import {
  COLOR,
  AXIOS_REQUEST_TYPE,
  TEXT_BUTTON_TYPE,
  ALBUM_TYPES
} from '@constants';

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
  const { user, setUserIngredients } = useAuthorization();
  const [totalIngredientsList, setTotalIngredientsList] = useSessionStorage<{
    [key: string]: IIngredient;
  }>('totalIngredientsList', {});

  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const getCocktailByIngredients = (
    ingredients: number[]
  ): Promise<IApiResponse<{ cocktails: ICocktail[] }>> => {
    return request.post('/user/ingredient', ingredients);
  };

  const getTotalIngredients = (): Promise<IApiResponse<IIngredient[]>> => {
    return request.get('/ingredient');
  };

  useEffect(() => {
    if (!Object.keys(totalIngredientsList).length) {
      const initializeTotalIngredientList = async (): Promise<void> => {
        const totalIngredients = await getTotalIngredients();
        const totalIngredientList: {
          [key: number]: IIngredient;
        } = {};

        totalIngredients.data.forEach((ingredient) => {
          totalIngredientList[ingredient.id] = ingredient;
        });

        setTotalIngredientsList(totalIngredientList);
      };

      initializeTotalIngredientList();
    }
  }, []);

  useEffect(() => {
    const mainIngredients: IIngredient[] = [];
    const subIngredients: IIngredient[] = [];

    user?.ingredients.forEach((ingredient) => {
      ingredient.alcohol
        ? mainIngredients.push(ingredient)
        : subIngredients.push(ingredient);
    });

    setIngredients({
      main: mainIngredients,
      sub: subIngredients
    });
  }, [user?.ingredients]);

  useEffect(() => {
    if (ingredients.main.length || ingredients.sub.length) {
      const mainIngredientsId = ingredients.main.map(
        (ingredient) => ingredient.id
      );
      const subIngredientsId = ingredients.sub.map(
        (ingredient) => ingredient.id
      );

      const userIngredientsId = [...mainIngredientsId, ...subIngredientsId];

      const setRecommendedCocktailsByIngredients = async (): Promise<void> => {
        const recommendedCocktails = await getCocktailByIngredients(
          userIngredientsId
        );

        setRecommendedCocktails(recommendedCocktails.data.cocktails);
      };

      setRecommendedCocktailsByIngredients();
    } else {
      setRecommendedCocktails([]);
    }
  }, [ingredients]);

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
    if (user?.id) {
      await updateUserIngredients(user.id, selectedIngredients);
    }

    const recentIngredients = selectedIngredients.map(
      (id) => totalIngredientsList[id]
    );

    if (recentIngredients !== user?.ingredients) {
      setUserIngredients(recentIngredients);
    }

    closeModal();
  };

  return (
    <HeaderPageTemplate>
      <SectionDividerWithTitle
        titleText='가지고 계신 재료로 레시피를 추천 받아 보세요!'
        withHeader
      >
        <StyledIngredientContainer style={{ width: '100%', height: '100%' }}>
          <Text color={COLOR.BLACK_OPACITY}>알콜</Text>
          <IngredientCarousel
            albumType={ALBUM_TYPES.ALCOHOL}
            itemList={ingredients.main}
            row='single'
          />
          <Text color={COLOR.BLACK_OPACITY}>감미료</Text>
          <IngredientCarousel
            albumType={ALBUM_TYPES.SWEETENER}
            itemList={ingredients.sub}
            row='double'
          />
          <StyledTextButton
            buttonType={TEXT_BUTTON_TYPE.SHORT_PINK}
            onClick={openModal}
          >
            재료 수정
          </StyledTextButton>
        </StyledIngredientContainer>
        <CocktailList
          cocktailList={recommendedCocktails.map((cocktail) => ({
            id: cocktail.id,
            name: cocktail.name,
            type: 'whiskey'
          }))}
        />
      </SectionDividerWithTitle>
      {Object.keys(totalIngredientsList).length && (
        <IngredientSelectModal
          initialMainIngredient={ingredients.main.map(
            (ingredient) => ingredient.id
          )}
          initialSubIngredient={ingredients.sub.map(
            (ingredient) => ingredient.id
          )}
          totalIngredientsList={totalIngredientsList}
          visible={isModalVisible}
          onClose={closeModal}
          onSelectDone={handleSelectDone}
        />
      )}
      <SearchBot />
    </HeaderPageTemplate>
  );
};

export default JangoPage;
