import type { HTMLAttributes } from 'react';
import type { ColorKeys, TextSizeKeys } from '@models/types';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: string;
  size?: TextSizeKeys;
  color?: ColorKeys;
  bold?: boolean;
  block?: boolean;
  dangerously?: boolean;
}

export type { TextProps };
