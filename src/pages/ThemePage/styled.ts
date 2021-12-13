import TextButton from '@compound/TextButton';
import { HEADER_HEIGHT } from '@constants/headerHeight';
import BackButton from '@domain/BackButton';
import styled from '@emotion/styled';

const StyledThemePageContainer = styled.div`
  padding-top: ${HEADER_HEIGHT};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  & > div:nth-of-type(1):not(.result) {
    transform: translate(50vw, 0);
  }
`;

const StyledContentContainer = styled.div`
  display: grid;
  align-items: center;
  transition: transform 500ms ease-in-out;

  &.result {
    transform: translate(-50%, 0);

    & .mainCarousel {
      transition: transform 1s ease-in-out;
      transform: translate(-50vw, 0);
    }
  }
`;

const StyledResultContainer = styled.div`
  overflow-y: scroll;
`;

const StyledResultButton = styled(TextButton)`
  position: absolute;
  bottom: 130px;
  left: calc(50% - 110px);
`;

const StyledBackButton = styled(BackButton)`
  position: absolute;
  left: 10px;
  bottom: 20px;
`;

export {
  StyledThemePageContainer,
  StyledContentContainer,
  StyledResultContainer,
  StyledResultButton,
  StyledBackButton
};
