import type { IconType } from '@base/Icon/types';
import type { HTMLAttributes } from 'react';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  name: IconType;
}

export type { IconButtonProps };
