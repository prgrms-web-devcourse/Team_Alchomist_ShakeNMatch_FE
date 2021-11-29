import type { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { THEME_COLOR } from '@utils/constants/color';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction?: 'horizontal' | 'vertical';
  size?: number;
  gap?: number;
  color?: string;
}

const Line = styled.hr<Required<Pick<DividerProps, 'size' | 'gap' | 'color'>>>`
  border: none;
  background-color: ${({ color }): string => color};

  &.horizontal {
    display: block;
    width: 100%;
    height: ${({ size }): string => `${size}px`};
    margin: ${({ gap }): string => `${gap}px 0 ${gap}px 0`};
  }

  &.vertical {
    display: inline-block;
    height: 100%;
    width: ${({ size }): string => `${size}px`};
    margin: ${({ gap }): string => `0 ${gap}px 0 ${gap}px`};
    vertical-align: middle;
  }
`;

const DEFAULT_GAP = 0;
const DEFAULT_SIZE = 1;

const Divider = ({
  direction = 'horizontal',
  size = DEFAULT_SIZE,
  gap = DEFAULT_GAP,
  color = THEME_COLOR.primary,
  ...props
}: DividerProps): JSX.Element => {
  return (
    <Line
      className={direction}
      color={color}
      gap={gap}
      size={size}
      {...props}
    />
  );
};

export default Divider;
