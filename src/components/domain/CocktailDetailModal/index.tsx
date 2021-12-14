import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import type { Review } from '@domain/CocktailReviewModal/types';
import type { ModalProps } from '@base/Modal/types';
import CocktailReviewModal from '@domain/CocktailReviewModal';
import { Image, Button, SectionDivider, Modal, Text } from '@base';
import MenuTab from '@compound/MenuTab';
import IngredientItem from './IngredientItem';
import UserReviewItem from './UserReviewItem';
import TitleSectionContainer from '@domain/TitleSectionContainer';
import { COLOR } from '@utils/constants/colors';

type CocktailDetailModalProps = ModalProps;

const StyledIngredientListWrapper = styled.div`
  overflow: scroll;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
`;

const StyledReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
  overflow: scroll;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${COLOR.IVORY};
  & > * {
    flex-shrink: 0;
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-of-type(3n) {
    background-color: aliceblue;
  }
  &:nth-of-type(3n + 1) {
    background-color: ${COLOR.BASIC_WHITE};
  }
  &:nth-of-type(3n + 2) {
    background-color: ${COLOR.IVORY};
  }
`;

const MOCK_INGREDIENT_DATA = [1, 1, 1, 1, 1];
const MOCK_REVIEW_DATA = [1, 1, 1, 1, 1, 1, 1];

const CocktailDetailModal = ({
  size,
  backgroundColor,
  color,
  visible,
  onClose
}: CocktailDetailModalProps): ReactElement => {
  const [isVisible, setIsVisible] = useState(false); //리뷰모달
  const [userReview, setUserReview] = useState<Review | null>(null);

  const handleComplete = (reviewInfo: Review): void => {
    console.log(reviewInfo);
    setUserReview(reviewInfo);
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
            <SectionDivider ratio={[1, 1]}>
              <StyledSection>
                <Image alt='Image' height='100%' mode='cover' width='100%' />
              </StyledSection>
              <StyledSection>
                <TitleSectionContainer dividerVisible titleText='Martiny'>
                  <StyledIngredientListWrapper>
                    {MOCK_INGREDIENT_DATA.map(() => (
                      <IngredientItem />
                    ))}
                    <Text size='sm'>
                      {'칵테일 레시피에 대한 정보가 들어가는 곳입니다'}
                    </Text>
                  </StyledIngredientListWrapper>
                </TitleSectionContainer>
              </StyledSection>
            </SectionDivider>
            <SectionDivider ratio={[4, 3]}>
              <StyledSection>
                <Image alt='Image' height='100%' mode='cover' width='100%' />
              </StyledSection>
              <StyledSection>
                <StyledReviewListWrapper>
                  {MOCK_REVIEW_DATA.map(() => (
                    <UserReviewItem />
                  ))}
                </StyledReviewListWrapper>
                <Button
                  type='button'
                  onClick={(): void => {
                    console.log('리뷰작성 클릭');
                    setIsVisible(true);
                  }}
                >
                  {'리뷰 작성'}
                </Button>
                <p>
                  <label>{'파일이름'}</label>
                  <div>{userReview ? userReview.userFile?.name : '-'}</div>
                  <label>{'평점'}</label>
                  <div>{userReview ? userReview.userRate.toString() : '0'}</div>
                  <label>{'한줄 평'}</label>
                  <div>{userReview ? userReview.userComment : '없음'}</div>
                </p>
              </StyledSection>
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
