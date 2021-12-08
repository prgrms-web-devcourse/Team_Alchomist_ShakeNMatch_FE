import type { ReactElement } from 'react';
import { StyledInput } from './style';
import type { InputProps } from './types';

const DEFAULT_MAXLENGTH = 20;

const Input = ({
  inputType = 'text',
  fontSize = 'xs',
  maxLength = DEFAULT_MAXLENGTH,
  ...props
}: InputProps): ReactElement => {
  return (
    <StyledInput
      fontSize={fontSize}
      maxLength={maxLength}
      type={inputType}
      {...props}
    />
  );
};

export default Input;
