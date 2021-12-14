import type { ReactElement } from 'react';
import type { AlbumProps } from './types';
import Text from '@base/Text';
import Image from '@base/Image';
import { StyledContainer } from './styled';

const DEFAULT_TYPE = 'alcohol';
const DEFAULT_TEXT = '';
const DEFAULT_IMAGE_WIDTH = '70px';
const DEFAULT_IMAGE_HEIGHT = '70px';
const DEFAULT_IMAGE_SRC = 'http://via.placeholder.com/100x100';

const Album = ({
  type = DEFAULT_TYPE,
  text = DEFAULT_TEXT,
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  imageSrc = DEFAULT_IMAGE_SRC,
  onClick
}: AlbumProps): ReactElement => {
  return (
    <StyledContainer type={type} onClick={onClick}>
      <Image
        height={imageHeight}
        mode='cover'
        src={imageSrc}
        width={imageWidth}
      />
      <Text color='BLACK' size='xs'>
        {text}
      </Text>
    </StyledContainer>
  );
};

export default Album;
