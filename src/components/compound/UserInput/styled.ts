import styled from '@emotion/styled';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;

  & input[name='age'],
  input[name='nickname'] {
    text-align: center;
  }
`;

const StyledErrorContainer = styled.div`
  height: 15px;
`;

export { StyledLabel, StyledErrorContainer };
