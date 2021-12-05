import type { ReactElement } from 'react';
import { StyledInput } from './style';
import type { InputProps } from './type';

const Input = (props: InputProps): ReactElement => {
  return <StyledInput type={props.inputType} {...props} />;
};

export default Input;
