import styled from '@emotion/styled';
import type { HTMLAttributes, ReactElement } from 'react';
import type { ButtonSizeType, ButtonColorType } from '../../../types';
import { BUTTON_SIZE } from '../../../utils/constants/size';
import { THEME_COLOR } from '../../../utils/constants/color';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  // children: ReactElement<TextProps>;
  type: 'button' | 'reset' | 'submit';
  size: ButtonSizeType;
  color: ButtonColorType;
}

const Button = styled.button<ButtonProps>`
  width: ${({ size }): string => BUTTON_SIZE[size].width};
  height: ${({ size }): string => BUTTON_SIZE[size].height};
  background-color: ${({ color }): string =>
    color ? THEME_COLOR[color] : THEME_COLOR['primary']};
`;

export default Button;
