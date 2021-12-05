import styled from '@emotion/styled';

const StyledLabel = styled.label`
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
    transform: scale(1.02);
  }
  &:active {
    filter: brightness(0.9);
    transform: scale(1.05);
  }
`;

export { StyledLabel };
