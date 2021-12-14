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
import { StyledIngredientListWrapper, StyledReviewListWrapper } from './style';
import {
  MOCK_INGREDIENT_DATA,
  MOCK_COCKTAIL_NAME,
  MOCK_REVIEW_DATA
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
    console.log(reviewInfo);
    setUserReview(reviewInfo);
    console.log(userReview);
    setIsVisible(false);
  };

  const handleClose = (): void => {
    if (!isVisible) {
      onClose?.();
    }
  };
  useEffect((): void => {
    console.log('mounted');
  }, []);

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
              <Image
                alt='Image'
                height='100%'
                mode='cover'
                src='https://picsum.photos/500'
                width='100%'
              />
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
                  <Text size='sm'>
                    {
                      '칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다칵테일 레시피에 대한 정보가 들어가는 곳입니다'
                    }
                  </Text>
                </StyledIngredientListWrapper>
              </TitleSectionContainer>
            </SectionDivider>
            <SectionDivider>
              <Image
                alt='Image'
                height='100%'
                mode='cover'
                src='https://picsum.photos/500'
                width='100%'
              />

              <TitleSectionContainer
                dividerVisible
                titleText={MOCK_COCKTAIL_NAME}
              >
                <StyledReviewListWrapper>
                  <Text size='md'>{'- 사용자 리뷰- '}</Text>
                  {MOCK_REVIEW_DATA.map(() => (
                    <UserReviewItem />
                  ))}
                  <TextButton
                    buttonType='LONG_WHITE'
                    dropShadow
                    type='button'
                    onClick={(): void => {
                      console.log('리뷰작성 클릭');
                      setIsVisible(true);
                    }}
                  >
                    {'리뷰작성'}
                  </TextButton>
                </StyledReviewListWrapper>
              </TitleSectionContainer>
            </SectionDivider>
          </MenuTab>
          <CocktailReviewModal
            backgroundColor={'BASIC_WHITE'}
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
