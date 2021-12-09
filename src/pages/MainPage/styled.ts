import BackButton from '@domain/BackButton';
import styled from '@emotion/styled';

const StyledPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledBackButton = styled(BackButton)`
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1001;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export { StyledPageContainer, StyledBackButton };
