import IconToggle from '@components/compound/IconToggle';
import type { IconToggleProps } from '@components/compound/IconToggle/types';
import { ICON_TOGGLE_NAME } from '@components/compound/IconToggle/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Compound/IconToggle',
  component: IconToggle,
  argTypes: {
    name: {
      control: 'inline-radio',
      options: Object.keys(ICON_TOGGLE_NAME)
    },
    initialState: {
      control: 'boolean'
    },
    onChange: {
      action: 'changed'
    }
  }
};

export const Default = ({ name, ...args }: IconToggleProps): ReactElement => (
  <IconToggle name={name || 'flag'} {...args} />
);
