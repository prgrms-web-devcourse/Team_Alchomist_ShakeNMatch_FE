import type { HTMLAttributes } from 'react';
import type { ColorKeys } from '@models/types';

const BUTTON_SIZE = {
  short: {
    width: '180px',
    height: '52px'
  },
  long: {
    width: '366px',
    height: '48px'
  }
} as const;
type ButtonSizeKeys = keyof typeof BUTTON_SIZE;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  size?: ButtonSizeKeys;
  basicColor?: ColorKeys;
  hoverColor?: ColorKeys;
  clickedColor?: ColorKeys;
  disabledColor?: ColorKeys;
}

export type { ButtonProps };
export { BUTTON_SIZE };
