import type { HTMLAttributes, ReactNode } from 'react';

type ButtonSizeType = 'sm' | 'md' | 'lg';

type ButtonColorType = 'dark' | 'primary' | 'light';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: 'button' | 'reset' | 'submit';
  size?: ButtonSizeType;
  color?: ButtonColorType;
}

export type { ButtonSizeType, ButtonColorType, ButtonProps };
