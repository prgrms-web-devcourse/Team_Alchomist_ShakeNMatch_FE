import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import type { Review } from '@domain/CocktailReviewModal/types';
import type { CocktailDetailModalProps, ICocktailData } from './types';
import { Image, SectionDivider, Modal, Text } from '@base';
import IngredientItem from './IngredientItem';
import UserReviewItem from './UserReviewItem';
import { TextButton, MenuTab } from '@compound';
import { TitleSectionContainer, CocktailReviewModal } from '@domain';
import {
  StyledIngredientListWrapper,
  StyledReviewListWrapper,
  StyledImageContainer
} from './style';
import { MOCK_COCKTAIL_RESPONSE, MOCK_USER_INGREDIENT_IDS } from './types';

const CocktailDetailModal = ({
  size,
  backgroundColor,
  color,
  visible,
  clickedCocktailId = 1,
  onClose
}: CocktailDetailModalProps): ReactElement => {
  const [isVisible, setIsVisible] = useState(false); //칵테일 리뷰 모달을 컨트롤
  // const [userReview, setUserReview] = useState<Review | null>(null); //리뷰 모달에서 리턴받은 값
  const [cocktailId, setCocktailId] = useState<number | null>(null);
  const [cocktailData, setCocktailData] = useState<ICocktailData | null>(null);
  const [cocktailReviews, setCocktailReviews] = useState<string[] | undefined>(
    []
  );

  useEffect(() => {
    if (visible) {
      //API 통신을 통해 칵테일 ID 로 검색해서 칵테일 상세정보를 받아옴
      setCocktailId(clickedCocktailId);
      console.log(cocktailId);
      setCocktailData(MOCK_COCKTAIL_RESPONSE);
      setCocktailReviews(MOCK_COCKTAIL_RESPONSE.data.reviews);
      return;
    }
    setCocktailId(null);
    setCocktailData(null);
  }, [visible]);

  const handleComplete = (reviewInfo: Review): void => {
    cocktailReviews?.push(reviewInfo.userComment);
    setCocktailReviews(() => cocktailReviews);
    setIsVisible(false);
  };

  const handleClose = (): void => {
    if (!isVisible) {
      onClose?.();
    }
  };

  return (
    <Modal
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      visible={visible}
      onClose={handleClose}
    >
      {visible && (
        <>
          <MenuTab
            initialOnChild='0'
            tabText={['Ingredients & Method', 'Reviews']}
          >
            <SectionDivider>
              <StyledImageContainer>
                <Image
                  alt='Image'
                  height='100%'
                  mode='cover'
                  src={cocktailData?.data.imageUrl}
                  width='100%'
                />
              </StyledImageContainer>
              <TitleSectionContainer
                dividerVisible
                titleText={cocktailData?.data.name}
              >
                <StyledIngredientListWrapper>
                  <Text size='md'>{'- 재료 -'}</Text>
                  {cocktailData?.data.volumes?.map((ingredient) => {
                    let isExists = false;
                    if (
                      MOCK_USER_INGREDIENT_IDS.includes(ingredient.ingredientId)
                    ) {
                      isExists = true;
                    }
                    return (
                      <IngredientItem
                        amount={ingredient.amount}
                        ingredientId={ingredient.ingredientId}
                        isUserHas={isExists}
                        measure={ingredient.measure}
                        name={ingredient.name}
                        type={ingredient.type}
                      />
                    );
                  })}
                  <Text size='md'>{'- 조제법- '}</Text>
                  <br />
                  <Text size='sm'>{cocktailData?.data.recipe}</Text>
                </StyledIngredientListWrapper>
              </TitleSectionContainer>
            </SectionDivider>
            <SectionDivider>
              <StyledImageContainer>
                <Image
                  alt='Image'
                  height='100%'
                  mode='cover'
                  src={cocktailData?.data.imageUrl}
                  width='100%'
                />
              </StyledImageContainer>
              <TitleSectionContainer
                dividerVisible
                titleText={cocktailData?.data.name}
              >
                <>
                  <StyledReviewListWrapper>
                    <Text size='md'>{'- 사용자 리뷰- '}</Text>
                    {cocktailReviews?.map((userReview) => (
                      <UserReviewItem
                        userComment={userReview}
                        userImageUrl=''
                        userRating={5}
                      />
                    ))}
                  </StyledReviewListWrapper>
                  <TextButton
                    buttonType='LONG_WHITE'
                    dropShadow
                    type='button'
                    onClick={(): void => {
                      setIsVisible(true);
                    }}
                  >
                    {'리뷰작성'}
                  </TextButton>
                </>
              </TitleSectionContainer>
            </SectionDivider>
          </MenuTab>
          <CocktailReviewModal
            color={'BASIC_WHITE'}
            handleSubmit={handleComplete}
            size={'sm'}
            visible={isVisible}
            onCancel={(): void => {
              setIsVisible(false);
            }}
          />
        </>
      )}
    </Modal>
  );
};

export default CocktailDetailModal;
