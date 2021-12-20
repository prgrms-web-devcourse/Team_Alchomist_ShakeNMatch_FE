import { COLOR } from '@constants';
import styled from '@emotion/styled';

const StyledReview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 337px;
  height: 103px;
  background: ${COLOR.BASIC_WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin: 9px;
  padding: 9px;
  box-sizing: border-box;
`;

const StyledImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 7px;
  width: 80px;
  height: 80px;
`;

const StyledRatingCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 172px;
  height: 80px;
`;

export { StyledReview, StyledImageWrapper, StyledRatingCommentWrapper };
