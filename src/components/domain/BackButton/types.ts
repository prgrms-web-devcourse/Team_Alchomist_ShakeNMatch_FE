import type { ColorType } from '@models';
import type { MouseEventHandler } from 'react';

interface BackButtonProps {
  color?: Extract<ColorType, '#FFFFFF' | '#142F43'>;
  onClick?: MouseEventHandler;
}

export type { BackButtonProps };
