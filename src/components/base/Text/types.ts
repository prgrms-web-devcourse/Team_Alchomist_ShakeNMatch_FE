import type { SizeType } from '@/models';
import type { HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SizeType;
  color?: string;
  bold?: boolean;
  block?: boolean;
}

export type { TextProps };
