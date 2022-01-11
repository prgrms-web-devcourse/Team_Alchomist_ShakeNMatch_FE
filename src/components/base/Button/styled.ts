import type { CSSObject } from '@emotion/styled';
import styled from '@emotion/styled';
import { COLOR } from '@constants/colors';
import type { ButtonProps } from './types';
import { BUTTON_SIZE } from './types';

const StyledButton = styled.button<ButtonProps>`
  display: ${({ block }): string => (block ? 'block' : 'inline-block')};
  cursor: pointer;
  border: none;
  border-radius: 7px;
  box-shadow: ${({ dropShadow = true }): string =>
    dropShadow ? '0px 1px 1px rgba(0, 0, 0, 0.25)' : ''};
  width: ${({ size }): string =>
    size ? BUTTON_SIZE[size].width : BUTTON_SIZE.short.width};
  height: ${({ size }): string =>
    size ? BUTTON_SIZE[size].height : BUTTON_SIZE.long.height};
  background-color: ${({ basicColor }): string =>
    basicColor ? basicColor : COLOR.BASIC_WHITE};

  & span {
    vertical-align: text-top;
  }

  &:hover:not(:disabled) {
    ${({ hoverColor }): string | CSSObject =>
      hoverColor
        ? { backgroundColor: `${hoverColor}` }
        : { filter: 'brightness(0.95)' }};
  }

  &:active:not(:disabled) {
    transform: translateY(3px);
    box-shadow: none;
    ${({ clickedColor }): string | CSSObject =>
      clickedColor
        ? { backgroundColor: `${clickedColor}` }
        : { filter: 'brightness(0.9)' }};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${COLOR.DARK_GRAY};
    filter: grayscale(0.7);
  }
`;

export { StyledButton };
