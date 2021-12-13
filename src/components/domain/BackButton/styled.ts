import styled from '@emotion/styled';

const StyledContainer = styled.div`
  cursor: pointer;
  position: absolute;
  left: 10px;
  bottom: 20px;
  z-index: 1001;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export { StyledContainer };
