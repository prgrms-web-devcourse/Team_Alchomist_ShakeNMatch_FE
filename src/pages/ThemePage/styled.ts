import { SectionDivider } from '@base';
import type { SectionDividerProps } from '@base/SectionDivider/types';
import TextButton from '@compound/TextButton';
import { HEADER_HEIGHT } from '@constants/headerHeight';
import { HEADER_TEMPLATE_MARGIN } from '@constants/margin';
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

const StyledSectionDivider = styled(SectionDivider)<
  Required<Pick<SectionDividerProps, 'width'>>
>`
  @media screen and (max-width: 1500px) {
    width: ${({ width }): string | number =>
      typeof width === 'string' ? width : `${width}px`};
  }
  @media screen and (min-width: 1500px) {
    width: ${({ width }): string | number | undefined =>
      typeof width === 'string'
        ? `calc(${width} - ${HEADER_TEMPLATE_MARGIN}px)`
        : `${width - HEADER_TEMPLATE_MARGIN}px`}
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

export {
  StyledThemePageContainer,
  StyledSectionDivider,
  StyledResultContainer,
  StyledResultButton
};
