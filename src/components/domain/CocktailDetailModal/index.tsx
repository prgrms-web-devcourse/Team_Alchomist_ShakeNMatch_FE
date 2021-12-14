import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import type { Review } from '@domain/CocktailReviewModal/types';
import type { ModalProps } from '@base/Modal/types';
import CocktailReviewModal from '@domain/CocktailReviewModal';
import { Image, Button, SectionDivider, Modal } from '@base';
import MenuTab from '@compound/MenuTab';

type CocktailDetailModalProps = ModalProps;

const StyledSection = styled.div`
  &:nth-of-type(3n) {
    background-color: aliceblue;
  }
  &:nth-of-type(3n + 1) {
    background-color: darkblue;
  }
  &:nth-of-type(3n + 2) {
    background-color: darkcyan;
  }
`;

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
            <SectionDivider>
              <StyledSection>
                <Image alt='Image' height='100%' mode='cover' width='100%' />
              </StyledSection>
              <StyledSection></StyledSection>
            </SectionDivider>
            <SectionDivider ratio={[1, 1]}>
              <StyledSection>
                <Image alt='Image' height='100%' mode='cover' width='100%' />
              </StyledSection>
              <StyledSection>
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
