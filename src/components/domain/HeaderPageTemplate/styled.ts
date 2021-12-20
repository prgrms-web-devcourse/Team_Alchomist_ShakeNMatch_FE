import { HEADER_TEMPLATE_MARGIN } from '@constants/margin';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  height: 100%;

  @media screen and (max-width: 1500px) {
    width: 100%;
    margin: 0 0;
  }
  @media screen and (min-width: 1500px) {
    width: calc(100% - ${HEADER_TEMPLATE_MARGIN * 2}px);
    margin: 0 ${HEADER_TEMPLATE_MARGIN}px;
  }
`;

export { StyledContainer };
