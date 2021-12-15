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
import {
  MOCK_INGREDIENT_DATA,
  MOCK_COCKTAIL_NAME,
  MOCK_REVIEW_DATA,
  MOCK_COCKTAIL_INSTRUCTION
} from './types';

const CocktailDetailModal = ({
  size,
  backgroundColor,
  color,
  visible,
  onClose
}: CocktailDetailModalProps): ReactElement => {
  const [isVisible, setIsVisible] = useState(false); //칵테일 리뷰 모달을 컨트롤
  const [userReview, setUserReview] = useState<Review | null>(null); //리뷰 모달에서 리턴받은 값

  useEffect(() => {
    console.log('API 호출 로직');
  }, [userReview]);

  const handleComplete = (reviewInfo: Review): void => {
    setUserReview(reviewInfo);
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
                  src='https://picsum.photos/500'
                  width='100%'
                />
              </StyledImageContainer>
              <TitleSectionContainer
                dividerVisible
                titleText={MOCK_COCKTAIL_NAME}
              >
                <StyledIngredientListWrapper>
                  <Text size='md'>{'- 재료 -'}</Text>
                  {MOCK_INGREDIENT_DATA.map(() => (
                    <IngredientItem />
                  ))}
                  <Text size='md'>{'- 조제법- '}</Text>
                  <br />
                  <Text size='sm'>{MOCK_COCKTAIL_INSTRUCTION}</Text>
                </StyledIngredientListWrapper>
              </TitleSectionContainer>
            </SectionDivider>
            <SectionDivider>
              <StyledImageContainer>
                <Image
                  alt='Image'
                  height='100%'
                  mode='cover'
                  src='https://picsum.photos/500'
                  width='100%'
                />
              </StyledImageContainer>
              <TitleSectionContainer
                dividerVisible
                titleText={MOCK_COCKTAIL_NAME}
              >
                <>
                  <StyledReviewListWrapper>
                    <Text size='md'>{'- 사용자 리뷰- '}</Text>
                    {MOCK_REVIEW_DATA.map(() => (
                      <UserReviewItem />
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
