import styled from '@emotion/styled';
import type { ReactChildren } from 'react';
import type { ButtonSizeType, ButtonColorType } from '../../../types';
import { BUTTONSIZE, BUTTONCOLOR } from '../../../utils/constants';

interface ButtonProps {
  children: ReactChildren;
  type: 'button' | 'reset' | 'submit';
  size: ButtonSizeType;
  color: ButtonColorType;
}

const Button = styled.button<ButtonProps>`
  width: ${({ size }): string => BUTTONSIZE[size].width};
  height: ${({ size }): string => BUTTONSIZE[size].height};
  background-color: ${({ color }): string => BUTTONCOLOR[color]};
`;

export default Button;
