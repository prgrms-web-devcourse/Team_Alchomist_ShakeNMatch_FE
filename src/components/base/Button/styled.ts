import styled from '@emotion/styled';
import type { ButtonProps } from './types';
import { BUTTON_SIZE, BUTTON_COLOR } from './types';

const StyledButton = styled.button<ButtonProps>`
  width: ${({ size }): string =>
    size ? BUTTON_SIZE[size].width : BUTTON_SIZE.short.width};
  height: ${({ size }): string =>
    size ? BUTTON_SIZE[size].height : BUTTON_SIZE.long.height};
  background-color: ${({ color }): string =>
    color ? BUTTON_COLOR[color] : BUTTON_COLOR.basic};
`;

export { StyledButton };
