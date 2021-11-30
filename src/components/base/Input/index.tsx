import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import type { SizeType } from '../../../types';
import type { HTMLAttributes } from 'react';
import { INPUT_SIZE, FONT_SIZE } from '../../../utils/constants';
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  fontSize: SizeType;
  inputSize: SizeType;
}

const StyledInput = styled.input<InputProps>`
  width: ${({ inputSize }): string => INPUT_SIZE[inputSize].width};
  height: ${({ inputSize }): string => INPUT_SIZE[inputSize].height};
  font-size: ${({ fontSize }): string => FONT_SIZE[fontSize]};
  border-radius: 1rem;
`;

const Input = (props: InputProps): ReactJSXElement => {
  return <StyledInput placeholder='Enter' {...props} />;
};

export default Input;
