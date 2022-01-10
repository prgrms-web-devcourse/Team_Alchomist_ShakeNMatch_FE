import { Children, useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import type { CocktailDetailModalProps } from './types';
import { Divider, Image, SectionDivider, Text, Tooltip } from '@base';
import IngredientItem from './IngredientItem';
import UserReviewItem from './UserReviewItem';
import { TextButton, MenuTab, IconToggle } from '@compound';
import { TitleSectionContainer, CocktailReviewModal } from '@domain';
import {
  StyledContentWrapper,
  StyledReviewListWrapper,
  StyledIngredientListWrapper,
  StyledImageContainer,
  StyledModal,
  StyledFavoriteContainer,
  StyledTextWrapper
} from './style';
import { useAuthorization } from '@contexts';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE, COLOR, MODAL_SIZE } from '@constants';
import type { IApiResponse, ICocktail, IReview } from '@models';

const CocktailDetailModal = ({
  size,
  backgroundColor,
  color,
  visible,
  cocktailId,
  onClose
}: CocktailDetailModalProps): ReactElement => {
  const [cocktailData, setCocktailData] = useState<ICocktail | null>(null);
  const [cocktailReviews, setCocktailReviews] = useState<IReview[]>([]);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const { user, updateContextBookmark } = useAuthorization();
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  const authRequest = useAxios(AXIOS_REQUEST_TYPE.AUTH);

  // Api
  const getCocktailDetailInfoById = (
    cocktailId: number
  ): Promise<IApiResponse<ICocktail>> => {
    return request.get(`/cocktail/id?id=${cocktailId}`);
  };

  const toggleBookmark = (
    userId: number,
    cocktailId: number
  ): Promise<IApiResponse<string>> => {
    return authRequest.post('/user/bookmark', { userId, cocktailId });
  };

  useEffect(() => {
    if (visible) {
      const getCocktailInfo = async (): Promise<void> => {
        if (cocktailId) {
          const searchResult = await getCocktailDetailInfoById(cocktailId);
          setCocktailData(searchResult.data);
          setCocktailReviews(searchResult.data.reviews);
        }
      };
      getCocktailInfo();
      return;
    }
    setCocktailData(null);
  }, [visible]);

  const onDelete = (reviewId: number): void => {
    const newCocktailReview = [...cocktailReviews].filter(
      (review) => review.id !== reviewId
    );
    setCocktailReviews(newCocktailReview);
  };

  //제출한 리뷰 정보를 칵테일 상세 모달로 넘겨 주어 리뷰 리스트 낙관적 업데이트 진행!
  const handleOnSubmitted = (reviewInfo: IReview): void => {
    const newCocktailReview = [...cocktailReviews, reviewInfo];
    setCocktailReviews(newCocktailReview);
    setIsReviewModalVisible(false);
  };

  const handleClose = (): void => {
    if (!isReviewModalVisible) {
      onClose?.();
    }
  };

  const handleBookmark = async (): Promise<void> => {
    if (user?.id && cocktailId) {
      await toggleBookmark(user.id, cocktailId);
    }
    // 낙관적 업데이트
    if (cocktailData) {
      updateContextBookmark({
        id: cocktailData.id,
        name: cocktailData.name
      });
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
        <>
          {user && (
            <StyledFavoriteContainer>
              <Tooltip
                direction='top'
                tooltipMessage='즐겨찾기'
                tooltipMessageSize='xxs'
                tooltipSize='xs'
              >
                <IconToggle
                  initialState={user?.bookmarks?.some(
                    (cocktail) => cocktail.id === cocktailId
                  )}
                  name='flag'
                  onChange={handleBookmark}
                />
              </Tooltip>
            </StyledFavoriteContainer>
          )}
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
                <StyledContentWrapper>
                  <Text color='NAVY' size='sm'>
                    {'- 재료 -'}
                  </Text>
                  <StyledIngredientListWrapper>
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
                  </StyledIngredientListWrapper>
                  <Divider color={COLOR.LIGHT_GREEN_OPACITY} gap={5} />
                  <Text color='NAVY' size='sm'>
                    {'- 조제법- '}
                  </Text>
                  <br />
                  <StyledTextWrapper>
                    <Text size='xs'>{cocktailData?.recipe}</Text>
                  </StyledTextWrapper>
                </StyledContentWrapper>
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
                <StyledReviewListWrapper>
                  <Text color='NAVY' size='sm'>
                    {'- 사용자 리뷰- '}
                  </Text>
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
                  {cocktailReviews.length ? (
                    Children.toArray(
                      cocktailReviews.map((userReview: IReview) => (
                        //여기에 리뷰 아이디 같이 넣어줘야 삭제 가능하다. 현재 Cocktail id 검색결과에서는 reviewId가 없음
                        <UserReviewItem
                          loginedUserId={user?.id}
                          nickname={userReview.nickname}
                          reviewId={userReview.id}
                          reviewOwnerId={userReview.userId}
                          userComment={userReview.description}
                          userImageUrl={userReview.url}
                          userRating={userReview.rating}
                          onDelete={onDelete}
                        />
                      ))
                    )
                  ) : (
                    <Text color='DARK_GRAY'>
                      아직 작성된 리뷰가 없습니다..!
                    </Text>
                  )}
                </StyledReviewListWrapper>
              </TitleSectionContainer>
            </SectionDivider>
          </MenuTab>
        </>
      )}
      {cocktailId && user && (
        <CocktailReviewModal
          cocktailId={cocktailId}
          color={COLOR.LIGHT_WHITE}
          handleOnSubmitted={handleOnSubmitted}
          loginedUserId={user.id}
          nickname={user.nickname}
          size={MODAL_SIZE.SM}
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
