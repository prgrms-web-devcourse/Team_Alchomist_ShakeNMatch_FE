import type { ReactElement } from 'react';
import { StyledImage } from './styled';
import imageSrc from '@assets/loader/shaker.png';

const Loader = (): ReactElement => {
  return (
    <StyledImage height='80px' mode='contain' src={imageSrc} width='80px' />
  );
};

export default Loader;
