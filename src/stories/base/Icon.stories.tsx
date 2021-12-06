import Icon from '@base/Icon';
import styled from '@emotion/styled';
import type { IconProps } from '@base/Icon/types';
import { ICON_TYPE } from '@constants/icon';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Base/Icon',
  component: Icon,
  argTypes: {
    type: {
      control: 'select',
      defaultValue: 'arrowDownNavy',
      options: Object.keys(ICON_TYPE)
    }
  }
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0efe3;
`;

export const Default = (props: IconProps): ReactElement => {
  return (
    <Container>
      <Icon {...props} />
    </Container>
  );
};
