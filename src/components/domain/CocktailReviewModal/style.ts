import styled from '@emotion/styled';

const StyledReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledTextEditor = styled.textarea`
  font-size: 16px;
  padding: 10px;
  width: 100%;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
`;

export { StyledReviewForm, StyledTextEditor };
