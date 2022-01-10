import type { ReactElement } from 'react';
import { StyledImage } from './styled';
import imageSrc from '@assets/loader/shaker.png';
import { IMG_MODE } from '@constants';

const Loader = (): ReactElement => {
  return (
    <StyledImage
      height='80px'
      mode={IMG_MODE.CONTAIN}
      src={imageSrc}
      width='80px'
    />
  );
};

export default Loader;
