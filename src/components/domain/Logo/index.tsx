import { Image } from '@base';
import type { ImageProps } from '@base/Image/types';
import { LOGO } from '@constants/logos';
import type { ReactElement } from 'react';

interface LogoProps extends Omit<ImageProps, 'mode'> {
  size: keyof typeof LOGO;
}

const Logo = ({ size, ...props }: LogoProps): ReactElement => {
  return <Image mode='cover' src={LOGO[size]} {...props} />;
};

export default Logo;
