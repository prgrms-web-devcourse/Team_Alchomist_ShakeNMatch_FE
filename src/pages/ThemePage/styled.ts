import { COLOR } from '@constants';
import BackButton from '@domain/BackButton';
import styled from '@emotion/styled';

// 임시 헤더
const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  background-color: ${COLOR.IVORY};
`;

const StyledThemePageContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  height: calc(100vh - 70px);
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

const StyledResultContainer = styled.div``;

const StyledBackButton = styled(BackButton)`
  position: absolute;
  left: 10px;
  bottom: 20px;
`;

export {
  StyledHeader,
  StyledThemePageContainer,
  StyledContentContainer,
  StyledResultContainer,
  StyledBackButton
};
