import styled from '@emotion/styled';

const StyledLabel = styled.label`
  cursor: pointer;

  & > svg {
    transition: transform 0.1s ease-in;
  }

  &:hover {
    & > svg {
      filter: brightness(0.95);
      transform: scale(1.02);
    }
  }
  &:active {
    & > svg {
      filter: brightness(0.9);
      transform: scale(1.05);
    }
  }
`;

export { StyledLabel };
