import type { ReactElement } from 'react';
import { StyledInput } from './style';
import type { InputProps } from './type';
import { REAL_TYPE } from './type';

const Input = (props: InputProps): ReactElement => {
  return <StyledInput type={REAL_TYPE[props.inputType]} {...props} />;
};

export default Input;
