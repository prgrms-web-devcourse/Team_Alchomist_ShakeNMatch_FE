import type { HTMLAttributes } from 'react';

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

type ButtonColorType = 'BASIC' | 'HOVER' | 'CLICKED' | 'DISABLED';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  size?: ButtonSizeKeys;
  color?: ButtonColorType;
}

export type { ButtonProps };
export { BUTTON_SIZE };
