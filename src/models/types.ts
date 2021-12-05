import type { COLOR } from '@constants/colors';

type ColorKeys = keyof typeof COLOR;
type ColorType = typeof COLOR[ColorKeys];

type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type { ColorKeys, ColorType, SizeType };
