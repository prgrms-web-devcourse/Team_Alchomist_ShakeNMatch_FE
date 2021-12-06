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
  },
  kakao: {
    width: '300px',
    height: '45px'
  },
  google: {
    width: '189px',
    height: '45px'
  }
} as const;
type ButtonSizeKeys = keyof typeof BUTTON_SIZE;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  block?: boolean;
  size?: ButtonSizeKeys;
  dropShadow?: boolean;
  basicColor?: ColorKeys;
  hoverColor?: ColorKeys;
  clickedColor?: ColorKeys;
  disabledColor?: ColorKeys;
}

export type { ButtonProps };
export { BUTTON_SIZE };
