import TextToggle from '@components/compound/TextToggle';
import type { ReactElement } from 'react';
import { TOGGLE_TYPES } from '@constants';

export default {
  title: 'Component/compound/TextToggle',
  component: TextToggle
};

const handleToggle = (): void => {
  console.log('toggled');
};

export const Default = (): ReactElement => (
  <TextToggle
    block={false}
    id='3'
    toggleType={TOGGLE_TYPES.INGREDIENT}
    onChange={handleToggle}
  >
    세상에서 가장 긴 이름의 술
  </TextToggle>
);
