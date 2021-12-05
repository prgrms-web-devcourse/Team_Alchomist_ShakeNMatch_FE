import type { TextSizeKeys } from '@models';
import type { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  inputType?: 'text' | 'number';
  fontSize?: TextSizeKeys;
  maxLength?: number;
}

export type { InputProps };
