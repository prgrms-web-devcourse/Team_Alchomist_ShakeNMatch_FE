import { Image } from '@base';
import type { LogoProps } from './types';
import { DOMAINS, IMG_MODE, LOGO } from '@constants';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';

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
