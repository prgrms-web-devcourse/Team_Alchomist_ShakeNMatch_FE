import type { ReactElement } from 'react';
import type { AlbumProps } from './types';
import { ALBUM_ATTRIBUTES } from './types';
import { Text, Image } from '@base';
import { StyledContainer } from './styled';

const DEFAULT_ID = 1;
const DEFAULT_TYPE = 'alcohol';
const DEFAULT_TEXT = '';
const DEFAULT_IMAGE_SRC = 'https://picsum.photos/200';

const Album = ({
  cocktailId = DEFAULT_ID,
  type = DEFAULT_TYPE,
  text = DEFAULT_TEXT,
  imageSrc = DEFAULT_IMAGE_SRC,
  onHandleAlbumClick
}: AlbumProps): ReactElement => {
  return (
    <StyledContainer
      type={type}
      onClick={(): void => {
        onHandleAlbumClick?.(cocktailId ? cocktailId : 0);
      }}
    >
      <Image
        height={ALBUM_ATTRIBUTES[type].imageHeight}
        mode='contain'
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
