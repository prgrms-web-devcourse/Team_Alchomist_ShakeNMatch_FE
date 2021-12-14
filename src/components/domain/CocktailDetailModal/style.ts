import { COLOR } from '@constants';
import styled from '@emotion/styled';

const StyledLeftSection = styled.div`
  background-color: ${COLOR.IVORY};
  overflow: hidden;
`;

const StyledRightSection = styled.div`
  background-color: ${COLOR.IVORY};
  overflow: hidden;
`;

const StyledIngredientListWrapper = styled.div`
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

export {
  StyledLeftSection,
  StyledRightSection,
  StyledIngredientListWrapper,
  StyledReviewListWrapper
};
