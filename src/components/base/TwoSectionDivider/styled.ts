import styled from '@emotion/styled';
import type { CSSObject } from '@emotion/react';
import type { StyledSectionContainerProps } from './types';

const StyledSectionContainer = styled.div<StyledSectionContainerProps>`
  display: inline-flex;
  flex-direction: ${({ direction }): string | boolean =>
    direction === 'vertical' && 'column'};
  ${({ width, height }): Omit<StyledSectionContainerProps, 'direction'> => ({
    width,
    height
  })};
  ${({ rotate }): CSSObject => ({
    transform: `rotate(${rotate})`
  })};
  transition: transform 0.5s ease-in-out;

  & > * {
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
  }
`;

export { StyledSectionContainer };
