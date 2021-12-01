import type { HTMLAttributes } from 'react';

interface SectionDividerProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: [number, number];
  direction?: 'vertical' | 'horizontal';
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  rotate?: number | string;
}

type StyledSectionContainerProps = Pick<
  SectionDividerProps,
  'direction' | 'width' | 'height' | 'rotate' | 'radius'
>;

export type { SectionDividerProps, StyledSectionContainerProps };
