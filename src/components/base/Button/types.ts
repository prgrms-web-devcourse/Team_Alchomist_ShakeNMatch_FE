import type { ButtonHTMLAttributes } from 'react';
import type { ColorType } from '@models/types';

const BUTTON_TYPES_SIZE = {
  short: {
    width: '90px',
    height: '30px'
  },
  long: {
    width: '220px',
    height: '40px'
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
  },
  xShort: {
    width: '50px',
    height: '20px'
  }
} as const;
type ButtonSizeKeys = keyof typeof BUTTON_TYPES_SIZE;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  size?: ButtonSizeKeys;
  dropShadow?: boolean;
  basicColor?: ColorType;
  hoverColor?: ColorType;
  clickedColor?: ColorType;
  disabledColor?: ColorType;
}

export type { ButtonProps };
export { BUTTON_TYPES_SIZE };
