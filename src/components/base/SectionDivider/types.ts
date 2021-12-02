import type { DividerProps } from '@base/Divider/types';
import type { HTMLAttributes } from 'react';

interface SectionDividerProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number[];
  direction?: 'vertical' | 'horizontal';
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  rotate?: number | string;
  showDivider?: boolean;
  dividerOptions?: Omit<DividerProps, 'direction'>;
}

type StyledSectionContainerProps = Pick<
  SectionDividerProps,
  'direction' | 'width' | 'height' | 'rotate' | 'radius'
>;

export type { SectionDividerProps, StyledSectionContainerProps };
