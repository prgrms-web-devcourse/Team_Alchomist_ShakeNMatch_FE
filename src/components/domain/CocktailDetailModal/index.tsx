import { Children, useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import type { Review } from '@domain/CocktailReviewModal/types';
import type { CocktailDetailModalProps } from './types';
import { Image, SectionDivider, Text } from '@base';
import IngredientItem from './IngredientItem';
import UserReviewItem from './UserReviewItem';
import { TextButton, MenuTab, IconToggle } from '@compound';
import { TitleSectionContainer, CocktailReviewModal } from '@domain';
import {
  StyledIngredientListWrapper,
  StyledReviewListWrapper,
  StyledImageContainer,
  StyledModal
} from './style';
import { useAuthorization } from '@contexts/Authorization';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import type { IApiResponse, ICocktail, IReview } from '@models';

const CocktailDetailModal = ({
  size,
  backgroundColor,
  color,
  visible,
  clickedCocktailId = 1,
  onClose
}: CocktailDetailModalProps): ReactElement => {
  const [cocktailId, setCocktailId] = useState<number | null>(null);
  const [cocktailData, setCocktailData] = useState<ICocktail | null>(null);
  const [cocktailReviews, setCocktailReviews] = useState<string[] | undefined>(
    []
  );
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [returnedReviewModalData, setreturnedReviewModalData] =
    useState<Review | null>(null); //낙관적 업데이트를 하기 위함인데, 지울 때는 그러면 어떻게 하는건가
  const { user } = useAuthorization();
  const defaultRequest = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const getCocktailDetailInfoById = (
    cocktailId: number
  ): Promise<IApiResponse<ICocktail>> => {
    return defaultRequest.get(`/cocktail/id?id=${cocktailId}`);
  };

  useEffect(() => {
    if (visible) {
      setCocktailId(clickedCocktailId);
      const getCocktailInfo = async (): Promise<void> => {
        if (cocktailId) {
          const searchResult = await getCocktailDetailInfoById(cocktailId);
          setCocktailData(searchResult.data);
        }
      };
      getCocktailInfo();
      return;
    }
    setCocktailId(null);
    setCocktailData(null);
  }, [visible, cocktailId]); //둘 다 deps로 넣어주어야 다른 카드를 눌러도 잘 동작한다.

  const handleComplete = (reviewInfo: Review): void => {
    console.log(reviewInfo);
    console.log(returnedReviewModalData);
    setreturnedReviewModalData(reviewInfo);
    setCocktailReviews(cocktailReviews);
    setIsReviewModalVisible(false);
  };

  const handleClose = (): void => {
    if (!isReviewModalVisible) {
      onClose?.();
    }
  };

  return (
    <StyledModal
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      visible={visible}
      onClose={handleClose}
    >
      {visible && (
        <MenuTab tabText={['Ingredients & Method', 'Reviews']}>
          <SectionDivider>
            <StyledImageContainer>
              <Image
                alt='Image'
                height='100%'
                mode='cover'
                src={cocktailData?.type}
                width='100%'
              />
            </StyledImageContainer>
            <TitleSectionContainer
              dividerVisible
              titleText={cocktailData?.name}
            >
              <StyledIngredientListWrapper>
                <IconToggle name='flag' />
                <Text size='md'>{'- 재료 -'}</Text>
                {Children.toArray(
                  cocktailData?.volumes?.map((ingredient) => {
                    let isExists = false;
                    if (
                      user?.ingredients
                        .map((userIngredient) => userIngredient.id)
                        .includes(ingredient.id)
                    ) {
                      isExists = true;
                    }
                    return (
                      <IngredientItem
                        amount={ingredient.amount}
                        id={ingredient.id}
                        isUserHas={isExists}
                        measure={ingredient.measure}
                        name={ingredient.name}
                        type={ingredient.type}
                      />
                    );
                  })
                )}
                <Text size='md'>{'- 조제법- '}</Text>
                <br />
                <Text size='sm'>{cocktailData?.recipe}</Text>
              </StyledIngredientListWrapper>
            </TitleSectionContainer>
          </SectionDivider>
          <SectionDivider>
            <StyledImageContainer>
              <Image
                alt='Image'
                height='100%'
                mode='cover'
                src={cocktailData?.type}
                width='100%'
              />
            </StyledImageContainer>
            <TitleSectionContainer
              dividerVisible
              titleText={cocktailData?.name}
            >
              <>
                <StyledReviewListWrapper>
                  <Text size='md'>{'- 사용자 리뷰- '}</Text>
                  {Children.toArray(
                    cocktailData?.reviews?.map((userReview: IReview) => (
                      //여기에 리뷰 아이디 같이 넣어줘야 삭제 가능하다. 현재 Cocktail id 검색결과에서는 reviewId가 없음
                      <UserReviewItem
                        loginedUserId={user?.id}
                        nickname={userReview.nickname}
                        reviewId={userReview.id}
                        reviewOwnerId={userReview.userId}
                        userComment={userReview.description}
                        userImageUrl={userReview.url}
                        userRating={userReview.rating}
                      />
                    ))
                  )}
                </StyledReviewListWrapper>
                {user && (
                  <TextButton
                    buttonType='LONG_WHITE'
                    dropShadow
                    type='button'
                    onClick={(): void => {
                      setIsReviewModalVisible(true);
                    }}
                  >
                    {'리뷰작성'}
                  </TextButton>
                )}
              </>
            </TitleSectionContainer>
          </SectionDivider>
        </MenuTab>
      )}
      {cocktailId && (
        <CocktailReviewModal
          cocktailId={cocktailId} //어떤 칵테일에 대한 리뷰인지
          color={'BASIC_WHITE'}
          handleSubmit={handleComplete}
          loginedUserId={user?.id}
          size={'sm'}
          visible={isReviewModalVisible}
          onCancel={(): void => {
            setIsReviewModalVisible(false);
          }}
        />
      )}
    </StyledModal>
  );
};

export default CocktailDetailModal;
