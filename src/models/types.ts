import type { TEXT_SIZE, TEXT_WEIGHT } from '@constants';
import type { COLOR } from '@constants/colors';

type ColorKeys = keyof typeof COLOR;
type ColorType = typeof COLOR[ColorKeys];

type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextSizeKeys = keyof typeof TEXT_SIZE;
type ITextSize = typeof TEXT_SIZE[TextSizeKeys];
type TextWeightKeys = keyof typeof TEXT_WEIGHT;
type ITextWeight = typeof TEXT_WEIGHT[TextWeightKeys];

export type {
  ColorKeys,
  ColorType,
  SizeType,
  ITextSize,
  ITextWeight,
  TextSizeKeys,
  TextWeightKeys
};
