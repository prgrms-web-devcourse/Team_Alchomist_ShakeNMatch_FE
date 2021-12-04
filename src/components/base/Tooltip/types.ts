import type { ReactElement } from 'react';

interface TooltipProps {
  children: ReactElement;
  message: string;
  fontSize: string;
  size?: 'sm' | 'md' | 'lg';
  direction?: 'right' | 'left' | 'top' | 'bottom';
}

export type { TooltipProps };
