import type { TEXT_SIZE } from '@utils/constants';
import type { ReactElement } from 'react';

const TOOLTIP_SIZE = {
  xs: { width: 100, height: 50 },
  sm: { width: 200, height: 50 },
  md: { width: 270, height: 75 },
  lg: { width: 380, height: 100 }
} as const;
interface TooltipProps {
  children: ReactElement;
  tooltipMessage: string;
  direction?: 'right' | 'left' | 'top' | 'bottom';
  tooltipSize?: keyof typeof TOOLTIP_SIZE;
  tooltipMessageSize: keyof typeof TEXT_SIZE;
}

export { TOOLTIP_SIZE };
export type { TooltipProps };
