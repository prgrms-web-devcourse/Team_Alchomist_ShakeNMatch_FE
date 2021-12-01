import type { HTMLAttributes } from 'react';

interface TwoSectionDividerProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: [number, number];
  direction?: 'vertical' | 'horizontal';
  width?: number | string;
  height?: number | string;
  rotate?: string;
}

type StyledSectionContainerProps = Pick<
  TwoSectionDividerProps,
  'direction' | 'width' | 'height' | 'rotate'
>;

export type { TwoSectionDividerProps, StyledSectionContainerProps };
