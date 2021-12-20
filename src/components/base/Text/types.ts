import type { HTMLAttributes } from 'react';
import type { ColorKeys, TextSizeKeys } from '@models/types';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: string | number;
  size?: TextSizeKeys;
  backgroundColor?: ColorKeys;
  color?: ColorKeys;
  bold?: boolean;
  block?: boolean;
  dangerously?: boolean;
  italic?: boolean;
}

export type { TextProps };
