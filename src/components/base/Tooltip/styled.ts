import styled from '@emotion/styled';
import type { TooltipProps } from './types';
import { TOOLTIP_TYPE } from './types';

const MARGIN = 5;
const MINUS = -1;

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
  Required<Pick<TooltipProps, 'tooltipSize' | 'direction'>>
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
  top: ${({ direction, tooltipSize }): string => {
    let position = '';
    switch (direction) {
      case 'top':
        position =
          tooltipSize &&
          ((TOOLTIP_TYPE[tooltipSize].height + MARGIN) * MINUS).toString() +
            'px';
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

  right: ${({ direction, tooltipSize }): string => {
    let position = '';
    switch (direction) {
      case 'top':
        position = '0px';
        break;
      case 'bottom':
        position = '0px';
        break;
      case 'left':
        position = '-105%';
        break;
      case 'right':
        position =
          tooltipSize &&
          ((TOOLTIP_TYPE[tooltipSize].width + MARGIN) * MINUS).toString() +
            'px';
        break;
    }
    return position;
  }};
  visibility: hidden;
  width: ${({ tooltipSize }): string =>
    tooltipSize && TOOLTIP_TYPE[tooltipSize].width + 'px'};
  height: ${({ tooltipSize }): string =>
    tooltipSize && TOOLTIP_TYPE[tooltipSize].height + 'px'};
`;

export { StyledTooltipWrapper, StyledTooltipContent };
