import type { HTMLAttributes } from 'react';
import type { ColorType, ITextSize } from '@models/types';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: string | number;
  size?: ITextSize;
  backgroundColor?: ColorType;
  color?: ColorType;
  bold?: boolean;
  block?: boolean;
  dangerously?: boolean;
  italic?: boolean;
  stroke?: boolean;
}

export type { TextProps };
