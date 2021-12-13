import styled from '@emotion/styled';

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.1s ease-in;

  &:hover {
    filter: brightness(0.95);
    transform: scale(1.02);
  }

  &:active {
    filter: brightness(0.9);
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.2;
    filter: brightness(0.85) grayscale(0.3);
  }
`;

export { StyledButton };
