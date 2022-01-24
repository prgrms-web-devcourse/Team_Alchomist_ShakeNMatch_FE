import type { ReactElement } from 'react';
import { StyledInput } from './style';
import type { InputProps } from './types';
import { INPUT_TYPE, TEXT_SIZE } from '@constants';

const DEFAULT_MAXLENGTH = 20;

const Input = ({
  inputType = INPUT_TYPE.TEXT,
  fontSize = TEXT_SIZE.xs,
  maxLength = DEFAULT_MAXLENGTH,
  alignCenter = true,
  ...props
}: InputProps): ReactElement => {
  return (
    <StyledInput
      alignCenter={alignCenter}
      fontSize={fontSize}
      maxLength={maxLength}
      type={inputType}
      {...props}
    />
  );
};

export default Input;
