import { COLOR } from '@constants';
import styled from '@emotion/styled';

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

const StyledLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.IVORY};
`;

const StyledRightSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.IVORY};
`;

export {
  StyledIngredientListWrapper,
  StyledReviewListWrapper,
  StyledLeftSection,
  StyledRightSection
};
