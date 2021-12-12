import Album from '@components/compound/Album';
import type { AlbumProps } from '@components/compound/Album/types';
import { ALBUM_ATTRIBUTES } from '@components/compound/Album/types';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Compound/Album',
  component: Album,
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(ALBUM_ATTRIBUTES)
    },
    text: {
      control: 'text',
      defaultValue: 'mojito'
    },
    imageWidth: {
      control: 'number',
      defaultValue: 70
    },
    imageHeight: {
      control: 'number',
      defaultValue: 70
    },
    imageSrc: {
      control: 'text',
      defaultValue: 'http://via.placeholder.com/100x100'
    }
  }
};

const Container = styled.div`
  width: auto;
  height: 100%;
  background-color: #f0efe3;
`;

export const Default = (props: AlbumProps): ReactElement => {
  return (
    <Container>
      <Album {...props} />
    </Container>
  );
};
