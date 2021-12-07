import type { ReactElement } from 'react';
import type { AlbumProps } from './types';
import Text from '@base/Text';
import { StyledContainer } from './styled';

const DEFAULT_TYPE = 'alcohol';
const DEFAULT_TEXT = 'mojito';
const DEFAULT_IMAGE_SRC = 'http://via.placeholder.com/50x50';

const Album = ({
  type = DEFAULT_TYPE,
  text = DEFAULT_TEXT,
  imageSrc = DEFAULT_IMAGE_SRC
}: AlbumProps): ReactElement => {
  return (
    <StyledContainer type={type}>
      <img src={imageSrc} style={{ margin: '20px 0px' }} />
      <Text color='BLACK' size='xs'>
        {text}
      </Text>
    </StyledContainer>
  );
};

export default Album;
