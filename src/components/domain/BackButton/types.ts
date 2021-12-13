import type { ColorKeys } from '@models';
import type { MouseEventHandler } from 'react';

interface BackButtonProps {
  color?: Extract<ColorKeys, 'BASIC_WHITE' | 'NAVY'>;
  onClick?: MouseEventHandler;
}

export type { BackButtonProps };
