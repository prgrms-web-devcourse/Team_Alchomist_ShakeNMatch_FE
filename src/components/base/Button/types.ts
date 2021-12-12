import type { ButtonHTMLAttributes } from 'react';
import type { ColorKeys } from '@models/types';

const BUTTON_SIZE = {
  short: {
    width: '90px',
    height: '30px'
  },
  long: {
    width: '220px',
    height: '30px'
  },
  kakao: {
    width: '300px',
    height: '45px'
  },
  google: {
    width: '189px',
    height: '45px'
  },
  headerIcon: {
    width: '50px',
    height: '50px'
  }
} as const;
type ButtonSizeKeys = keyof typeof BUTTON_SIZE;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
