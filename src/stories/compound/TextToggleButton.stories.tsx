import TextToggle from '@components/compound/TextToggle';
import type { ReactElement } from 'react';

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
    name='재료'
    toggleType='ingredient'
    onChange={handleToggle}
  >
    재료명
  </TextToggle>
);
