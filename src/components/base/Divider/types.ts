import type { ColorType } from '@models';
import type { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction?: 'horizontal' | 'vertical';
  size?: number;
  gap?: number | string;
  color?: ColorType;
}

export type { DividerProps };
