import ShoppingItem from '@components/domain/ShoppingItem';
import styled from '@emotion/styled';
import { COLOR } from '@utils/constants/colors';
import type { ReactElement } from 'react';
import type { ShoppingItemProps } from '@components/domain/ShoppingItem/types';

export default {
  title: 'Component/Domain/ShoppingItem',
  component: ShoppingItem,
  argTypes: {
    imageWidth: {
      control: 'number',
      defaultValue: 100
    },
    imageHeight: {
      control: 'number',
      defaultValue: 100
    },
    imageSrc: {
      control: 'text',
      defaultValue: 'http://via.placeholder.com/100x100'
    },
    title: {
      control: 'text',
      defaultValue: ''
    },
    price: {
      control: 'number',
      defaultValue: 0
    },
    vendor: {
      control: 'text',
      defaultValue: ''
    }
  }
};

const Container = styled.div`
  width: auto;
  height: 100%;
  background-color: ${COLOR.IVORY};
`;

export const Default = (props: ShoppingItemProps): ReactElement => {
  return (
    <Container>
      <ShoppingItem {...props} />
      <ShoppingItem {...props} />
      <ShoppingItem {...props} />
    </Container>
  );
};
