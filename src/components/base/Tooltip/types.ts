import type { ReactElement } from 'react';
import type { TOOLTIP_DIRECTION, TOOLTIP_SIZE } from '@constants';
import type { ITextSize } from '@models';

type TooltipDirectionKeys = keyof typeof TOOLTIP_DIRECTION;
type ITooltipDirection = typeof TOOLTIP_DIRECTION[TooltipDirectionKeys];

type TooltipSizeKeys = keyof typeof TOOLTIP_SIZE;
type ITooltipSize = typeof TOOLTIP_SIZE[TooltipSizeKeys];

const TOOLTIP_TYPE = {
  xs: { width: 100, height: 50 },
  sm: { width: 200, height: 50 },
  md: { width: 270, height: 75 },
  lg: { width: 380, height: 100 }
} as const;

interface TooltipProps {
  children: ReactElement;
  tooltipMessage: string;
  direction?: ITooltipDirection;
  tooltipSize?: ITooltipSize;
  tooltipMessageSize: ITextSize;
}

export { TOOLTIP_TYPE };
export type { TooltipProps };
