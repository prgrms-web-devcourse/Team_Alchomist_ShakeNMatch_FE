import MenuTab from '@components/compound/MenuTab';
import type { ReactElement } from 'react';

export default {
  title: 'Component/compound',
  component: MenuTab
};

export const Default = (): ReactElement => {
  return (
    <div style={{ height: '600px' }}>
      <MenuTab
        initialOnChild={'0'}
        tabText={['Ingredients & Method', 'Reviews']}
      >
        <div>재료와 만드는 방법~~~~</div>
        <div>여기는 유저 리뷰가 들어오는 곳이야염</div>
      </MenuTab>
    </div>
  );
};
