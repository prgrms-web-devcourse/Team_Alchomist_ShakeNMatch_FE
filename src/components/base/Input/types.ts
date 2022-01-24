import type { ITextSize } from '@models';
import type { InputHTMLAttributes } from 'react';
import type { INPUT_TYPE } from '@constants';

type InputTypeKeys = keyof typeof INPUT_TYPE;
type IInputType = typeof INPUT_TYPE[InputTypeKeys];

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: IInputType;
  fontSize?: ITextSize;
  alignCenter?: boolean;
}

export type { InputProps };
