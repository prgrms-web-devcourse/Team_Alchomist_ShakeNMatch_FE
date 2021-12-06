import styled from '@emotion/styled';
import type { TooltipProps } from './types';
import { TOOLTIP_SIZE } from './types';

const StyledTooltipWrapper = styled.div`
  position: relative;
  display: block;
  width: fit-content;
  height: fit-content;
  z-index: 1;
  &:hover > .tooltiptext,
  &:active > .tooltiptext {
    visibility: visible;
  }
`;

const StyledTooltipContent = styled.div<
  Required<Pick<TooltipProps, 'size' | 'direction'>>
>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  text-align: center;
  padding: 5px;
  border-radius: 7px;
  z-index: 1;
  top: ${({ direction, size }): string => {
    let position = '';
    const margin = 20;
    const minus = -1;
    switch (direction) {
      case 'top':
        position =
          ((TOOLTIP_SIZE[size].height + margin) * minus).toString() + 'px';
        break;
      case 'bottom':
        position = '105%';
        break;
      case 'right':
        position = '0px';
        break;
      case 'left':
        position = '0px';
        break;
    }
    return position;
  }};

  left: ${({ direction, size }): string => {
    let position = '';
    const margin = 20;
    const minus = -1;
    switch (direction) {
      case 'top':
        position = '0px';
        break;
      case 'bottom':
        position = '0px';
        break;
      case 'right':
        position = '105%';
        break;
      case 'left':
        position =
          ((TOOLTIP_SIZE[size].width + margin) * minus).toString() + 'px';
        break;
    }
    return position;
  }};
  visibility: hidden;
  width: ${({ size }): string => TOOLTIP_SIZE[size].width + 'px'};
  height: ${({ size }): string => TOOLTIP_SIZE[size].height + 'px'};
`;

export { StyledTooltipWrapper, StyledTooltipContent };
