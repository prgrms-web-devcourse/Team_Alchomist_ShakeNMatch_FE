import type { ReactElement } from 'react';
import type { AlbumProps } from './types';
import { ALBUM_ATTRIBUTES } from './types';
import { Text, Image } from '@base';
import { StyledContainer } from './styled';

const DEFAULT_TYPE = 'alcohol';
const DEFAULT_TEXT = '';
const DEFAULT_IMAGE_SRC = 'https://picsum.photos/200';

const Album = ({
  type = DEFAULT_TYPE,
  text = DEFAULT_TEXT,
  imageSrc = DEFAULT_IMAGE_SRC,
  onClick
}: AlbumProps): ReactElement => {
  return (
    <StyledContainer type={type} onClick={onClick}>
      <Image
        height={ALBUM_ATTRIBUTES[type].imageHeight}
        mode='cover'
        src={imageSrc}
        width={ALBUM_ATTRIBUTES[type].imageWidth}
      />
      <Text color='BLACK' size='xs'>
        {text}
      </Text>
    </StyledContainer>
  );
};

export default Album;
