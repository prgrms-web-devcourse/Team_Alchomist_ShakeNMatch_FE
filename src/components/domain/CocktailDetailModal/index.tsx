import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import type { Review } from '@domain/CocktailReviewModal/types';
import type { CocktailDetailModalProps } from './types';
import { Image, SectionDivider, Modal, Text } from '@base';
import MenuTab from '@compound/MenuTab';
import IngredientItem from './IngredientItem';
import UserReviewItem from './UserReviewItem';
import TextButton from '@compound/TextButton';
import TitleSectionContainer from '@domain/TitleSectionContainer';
import CocktailReviewModal from '@domain/CocktailReviewModal';
import {
  StyledIngredientListWrapper,
  StyledReviewListWrapper,
  StyledImageContainer
} from './style';
import { MOCK_COCKTAIL_RESPONSE } from './types';
import type { IngredientObject } from './IngredientItem/types';

const CocktailDetailModal = ({
  size,
  backgroundColor,
  color,
  visible,
  clickedCocktailId,
  onClose
}: CocktailDetailModalProps): ReactElement => {
  const [isVisible, setIsVisible] = useState(false); //칵테일 리뷰 모달을 컨트롤
  // const [userReview, setUserReview] = useState<Review | null>(null); //리뷰 모달에서 리턴받은 값
  const [cocktailId, setCocktailId] = useState<number | null>(null);
  const [cocktailName, setCocktailName] = useState('');
  const [cocktailIngredients, setCocktailIngredients] = useState<
    IngredientObject[]
  >([]);
  const [cocktailInstruction, setCocktailInstruction] = useState('');
  const [cocktailReviews, setCocktailReviews] = useState<string[]>([]);
  const [cocktailImages, setCocktailImages] = useState('');

  useEffect(() => {
    setCocktailId(clickedCocktailId);
  }, [isVisible]);

  useEffect(() => {
    //API 통신을 통해 칵테일 ID 로 검색해서 칵테일 상세정보를 받아옴
    const { data } = MOCK_COCKTAIL_RESPONSE;
    const { name, volumes, reviews, recipe, imageUrl } = data;
    setCocktailName(name);
    setCocktailIngredients(volumes);
    setCocktailInstruction(recipe);
    setCocktailReviews(reviews);
    setCocktailImages(imageUrl);
    //likes도 있음
    console.log('API 호출 로직');
  }, [cocktailId]);

  const handleComplete = (reviewInfo: Review): void => {
    cocktailReviews.push(reviewInfo.userComment);
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
                  src={cocktailImages}
                  width='100%'
                />
              </StyledImageContainer>
              <TitleSectionContainer dividerVisible titleText={cocktailName}>
                <StyledIngredientListWrapper>
                  <Text size='md'>{'- 재료 -'}</Text>
                  {cocktailIngredients?.map((ingredient) => (
                    <IngredientItem
                      amount={ingredient.amount}
                      measure={ingredient.measure}
                      name={ingredient.name}
                      type={ingredient.type}
                    />
                  ))}
                  <Text size='md'>{'- 조제법- '}</Text>
                  <br />
                  <Text size='sm'>{cocktailInstruction}</Text>
                </StyledIngredientListWrapper>
              </TitleSectionContainer>
            </SectionDivider>
            <SectionDivider>
              <StyledImageContainer>
                <Image
                  alt='Image'
                  height='100%'
                  mode='cover'
                  src={cocktailImages}
                  width='100%'
                />
              </StyledImageContainer>
              <TitleSectionContainer dividerVisible titleText={cocktailName}>
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
