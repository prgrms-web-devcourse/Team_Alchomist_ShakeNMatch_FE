import type { HTMLAttributes } from 'react';
import type { ColorKeys } from '@models/types';

const TEXT_SIZE = {
  xs: '1rem',
  sm: '1.5rem',
  md: '2rem',
  lg: '2.5rem',
  xl: '3rem'
} as const;

const TEXT_WEIGHT = {
  normal: '400',
  bold: '700'
} as const;

type TextSizeKeys = keyof typeof TEXT_SIZE;
type ITextSize = typeof TEXT_SIZE[TextSizeKeys];
type TextWeightKeys = keyof typeof TEXT_WEIGHT;
type ITextWeight = typeof TEXT_WEIGHT[TextWeightKeys];

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: TextSizeKeys;
  color?: ColorKeys;
  bold?: boolean;
  block?: boolean;
}

export type { TextSizeKeys, ITextSize, TextWeightKeys, ITextWeight, TextProps };
export { TEXT_SIZE, TEXT_WEIGHT };
