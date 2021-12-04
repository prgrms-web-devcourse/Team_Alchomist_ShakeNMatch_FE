import type { HTMLAttributes } from 'react';
import { COLOR } from '@constants/colors';

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

const BUTTON_COLOR = {
  basic: COLOR.BASIC_WHITE,
  hover: COLOR.LIGHT_PINK,
  clicked: COLOR.BASIC_PINK,
  disabled: COLOR.DARK_GRAY
};
type ButtonColorKeys = keyof typeof BUTTON_COLOR;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  size?: ButtonSizeKeys;
  color?: ButtonColorKeys;
}

export type { ButtonProps };
export { BUTTON_SIZE, BUTTON_COLOR };
