import styled from '@emotion/styled';

const StyledReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

const StyledTextEditor = styled.textarea`
  font-size: 16px;
  padding: 10px;
  width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-end;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export {
  StyledReviewForm,
  StyledTextEditor,
  StyledWrapper,
  StyledButtonWrapper
};
