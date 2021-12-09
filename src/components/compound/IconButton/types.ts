import type { IconType } from '@base/Icon/types';
import type { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: IconType;
}

export type { IconButtonProps };
