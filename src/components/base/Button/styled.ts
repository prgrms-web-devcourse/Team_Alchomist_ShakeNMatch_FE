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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: ${({ size }): string =>
    size ? BUTTON_SIZE[size].width : BUTTON_SIZE.short.width};
  height: ${({ size }): string =>
    size ? BUTTON_SIZE[size].height : BUTTON_SIZE.long.height};
  background-color: ${({ basicColor }): string =>
    basicColor ? COLOR[basicColor] : COLOR.BASIC_WHITE};

  &:hover {
    ${({ hoverColor }): string | CSSObject =>
      hoverColor
        ? { backgroundColor: `${COLOR[hoverColor]}` }
        : { filter: 'brightness(0.95)' }};
  }

  &:active {
    transform: translateY(3px);
    box-shadow: none;
    ${({ clickedColor }): string | CSSObject =>
      clickedColor
        ? { backgroundColor: `${COLOR[clickedColor]}` }
        : { filter: 'brightness(0.9)' }};
  }
`;

export { StyledButton };
