import TextButton from '@compound/TextButton';
import { HEADER_HEIGHT } from '@constants/headerHeight';
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

const StyledResultContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledResultButton = styled(TextButton)`
  position: absolute;
  bottom: 100px;
  left: calc(50% - 110px);
`;

export { StyledThemePageContainer, StyledResultContainer, StyledResultButton };
