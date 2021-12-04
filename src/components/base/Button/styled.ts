import styled from '@emotion/styled';
import type { ButtonProps } from './types';
import { BUTTON_SIZE } from './types';
import { THEME_COLOR } from '@constants/color';

const StyledButton = styled.button<ButtonProps>`
  width: ${({ size }): string =>
    size ? BUTTON_SIZE[size].width : BUTTON_SIZE.short.width};
  height: ${({ size }): string =>
    size ? BUTTON_SIZE[size].height : BUTTON_SIZE.short.height};
  background-color: ${({ color }): string =>
    color ? THEME_COLOR[color] : THEME_COLOR.primary};
`;

export { StyledButton };
