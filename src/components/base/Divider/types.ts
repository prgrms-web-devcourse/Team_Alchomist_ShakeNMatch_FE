import type { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction?: 'horizontal' | 'vertical';
  size?: number;
  gap?: number;
  color?: string;
}

export type { DividerProps };
