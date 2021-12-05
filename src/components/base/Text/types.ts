import type { HTMLAttributes } from 'react';
import type { ColorKeys, TextSizeKeys } from '@models/types';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: TextSizeKeys;
  color?: ColorKeys;
  bold?: boolean;
  block?: boolean;
}

export type { TextProps };
