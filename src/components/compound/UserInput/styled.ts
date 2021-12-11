import styled from '@emotion/styled';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3px;

  & input[name='age'] {
    text-align: center;
  }
`;

const StyledErrorContainer = styled.div`
  height: 15px;
`;

export { StyledLabel, StyledErrorContainer };
