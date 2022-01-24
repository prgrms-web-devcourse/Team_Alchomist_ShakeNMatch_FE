import type { LOGO } from '@constants';
import type { ImageProps } from '@base/Image/types';

interface LogoProps extends Omit<ImageProps, 'mode'> {
  size: keyof typeof LOGO;
  link?: boolean;
}

export type { LogoProps };
