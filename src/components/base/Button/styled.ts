import styled from '@emotion/styled';
import type { ButtonProps } from './types';
import { BUTTON_SIZE } from './types';
import { COLOR } from '@constants/colors';

const StyledButton = styled.button<ButtonProps>`
  width: ${({ size }): string =>
    size ? BUTTON_SIZE[size].width : BUTTON_SIZE.md.width};
  height: ${({ size }): string =>
    size ? BUTTON_SIZE[size].height : BUTTON_SIZE.md.height};
  background-color: ${({ color }): string =>
    color ? COLOR[color] : COLOR.BASIC_PINK};
`;

export { StyledButton };
