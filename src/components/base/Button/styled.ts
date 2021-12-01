import styled from '@emotion/styled';
import type { ButtonProps } from './types';
import { BUTTON_SIZE } from '@constants/size';
import { THEME_COLOR } from '@constants/color';

const Button = styled.button<ButtonProps>`
  width: ${({ size }): string =>
    size ? BUTTON_SIZE[size].width : BUTTON_SIZE.md.width};
  height: ${({ size }): string =>
    size ? BUTTON_SIZE[size].height : BUTTON_SIZE.md.height};
  background-color: ${({ color }): string =>
    color ? THEME_COLOR[color] : THEME_COLOR.primary};
`;

export { Button };
