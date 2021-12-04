import type { HTMLAttributes, ReactNode } from 'react';

const BUTTON_SIZE = {
  lg: {
    width: '300px',
    height: '100px'
  },
  md: {
    width: '200px',
    height: '75px'
  },
  sm: {
    width: '100px',
    height: '50px'
  }
} as const;
type ButtonSizeKeys = keyof typeof BUTTON_SIZE;

type ButtonColorType = 'dark' | 'primary' | 'light';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: 'button' | 'reset' | 'submit';
  size?: ButtonSizeKeys;
  color?: ButtonColorType;
}

export type { ButtonProps };
export { BUTTON_SIZE };
