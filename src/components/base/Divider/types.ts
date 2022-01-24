import type { ColorType } from '@models';
import type { HTMLAttributes } from 'react';
import type { DIVIDER_DIRECTION } from '@constants';

type DividerDirectionKeys = keyof typeof DIVIDER_DIRECTION;
type IDiverderDirection = typeof DIVIDER_DIRECTION[DividerDirectionKeys];

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction?: IDiverderDirection;
  size?: number;
  gap?: number | string;
  color?: ColorType;
}

export type { DividerProps };
