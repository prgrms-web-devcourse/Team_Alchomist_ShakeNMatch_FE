import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import type { SizeType } from '../../../types';
import type { HTMLAttributes } from 'react';
import { INPUT_SIZE } from '../../../utils/constants';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  inputSize: SizeType;
}

const StyledInput = styled.input<InputProps>`
  width: ${({ inputSize }): string => INPUT_SIZE[inputSize].width};
  height: ${({ inputSize }): string => INPUT_SIZE[inputSize].height};
  border-radius: 1rem;
`;

const Input = (props: InputProps): ReactJSXElement => {
  return <StyledInput {...props} />;
};

export default Input;
