import type { ITextSize } from '@models';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: 'text' | 'number';
  fontSize?: ITextSize;
  alignCenter?: boolean;
}

export type { InputProps };
