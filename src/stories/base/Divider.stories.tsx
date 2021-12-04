import Divider from '@base/Divider';
import type { DividerProps } from '@base/Divider/types';
import { COLOR } from '@constants/colors';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Base/Divider',
  component: Divider,
  argTypes: {
    size: {
      control: 'number'
    },
    color: {
      control: 'select',
      options: Object.keys(COLOR)
    }
  }
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

export const Default = (props: DividerProps): ReactElement => (
  <Container>
    Hi
    <Divider {...props} />
    Hello
  </Container>
);
