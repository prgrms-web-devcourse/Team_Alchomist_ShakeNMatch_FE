import { Modal } from '@base';
import { COLOR } from '@constants';
import styled from '@emotion/styled';

const StyledFavoriteContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
`;

const StyledLeftSection = styled.div`
  background-color: ${COLOR.IVORY};
  overflow: hidden;
`;

const StyledRightSection = styled.div`
  background-color: ${COLOR.IVORY};
  overflow: hidden;
`;

const StyledModal = styled(Modal)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    flex-shrink: 0;
  }
  overflow: scroll;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${COLOR.IVORY};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const StyledIngredientListWrapper = styled.div`
  height: 45%;
  overflow-y: scroll;
`;

const StyledReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    flex-shrink: 0;
  }
  overflow: scroll;
  width: 100%;
  height: 95%;
  box-sizing: border-box;
  background-color: ${COLOR.IVORY};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const StyledImageContainer = styled.div`
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  overflow: hidden;
`;

const StyledTextWrapper = styled.div`
  width: 340px;
  text-align: center;
`;

export {
  StyledFavoriteContainer,
  StyledModal,
  StyledLeftSection,
  StyledRightSection,
  StyledContentWrapper,
  StyledIngredientListWrapper,
  StyledReviewListWrapper,
  StyledImageContainer,
  StyledTextWrapper
};
