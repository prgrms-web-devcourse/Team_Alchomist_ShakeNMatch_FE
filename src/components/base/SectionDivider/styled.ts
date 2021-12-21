import styled from '@emotion/styled';
import type { CSSObject } from '@emotion/react';
import type { StyledSectionContainerProps } from './types';
import { HEADER_TEMPLATE_MARGIN } from '@constants/margin';

const StyledSectionContainer = styled.div<
  Required<StyledSectionContainerProps>
>`
  display: inline-flex;
  overflow: hidden;
  flex-direction: ${({ direction }): string | boolean =>
    direction === 'vertical' && 'column'};
  transition: all 0.7s ease-in-out;
  width: ${({ width }): string | number =>
    typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }): string | number =>
    typeof height === 'string' ? height : `${height}px`};
  border-radius: ${({ radius }): string | number =>
    typeof radius === 'string' ? radius : `${radius}px`};

  ${({ rotate }): CSSObject => ({
    transform: `rotate(${rotate})`
  })};

  @media screen and (max-width: 1500px) {
    width: ${({ width }): string | number =>
      typeof width === 'string' ? width : `${width}px`};
  }
  @media screen and (min-width: 1500px) {
    width: ${({ width }): string | number =>
      typeof width === 'string'
        ? `calc(${width} - ${HEADER_TEMPLATE_MARGIN}px)`
        : `${width - HEADER_TEMPLATE_MARGIN}px`};
  }

  & > * {
    transition: all 0.7s ease-in-out;
  }
`;

export { StyledSectionContainer };
