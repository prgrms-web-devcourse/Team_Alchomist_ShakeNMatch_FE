import { Image } from '@base';
import type { ImageProps } from '@base/Image/types';
import { DOMAINS, IMG_MODE } from '@constants';
import { LOGO } from '@constants/logos';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';

interface LogoProps extends Omit<ImageProps, 'mode'> {
  size: keyof typeof LOGO;
  link?: boolean;
}

const Logo = ({ size, link, ...props }: LogoProps): ReactElement => {
  const navigate = useNavigate();

  const handleLink = (): void => {
    if (link) {
      navigate(`/${DOMAINS.main}`);
    }
  };

  return (
    <Image
      mode={IMG_MODE.COVER}
      src={LOGO[size]}
      style={{ cursor: link ? 'pointer' : 'default' }}
      onClick={handleLink}
      {...props}
    />
  );
};

export default Logo;
