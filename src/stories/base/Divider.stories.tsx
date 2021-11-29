import styled from '@emotion/styled';

import type { DividerProps } from '@base/Divider';
import Divider from '@base/Divider';
import Text from '@base/Text';

export default {
  title: 'Component/Base/Divider',
  component: Divider
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

export const Default = (props: DividerProps): JSX.Element => (
  <Container>
    <Text>Hi</Text>
    <Divider {...props} />
    <Text>Hi</Text>
  </Container>
);
