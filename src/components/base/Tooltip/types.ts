import type { ReactElement } from 'react';

const TOOLTIP_SIZE = {
  sm: { width: 200, height: 50 },
  md: { width: 270, height: 75 },
  lg: { width: 380, height: 100 }
} as const;
interface TooltipProps {
  children: ReactElement;
  message: string;
  fontSize: string;
  size?: 'sm' | 'md' | 'lg';
  direction?: 'right' | 'left' | 'top' | 'bottom';
}

export { TOOLTIP_SIZE };
export type { TooltipProps };
