import type { ReactElement } from 'react';
import Button from '@base/Button';
import type { ButtonProps } from '@base/Button/types';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['button', 'submit', 'reset']
    },
    size: {
      control: 'inline-radio',
      options: ['short', 'long']
    },
    color: {
      control: 'inline-radio',
      options: ['BASIC', 'HOVER', 'CLICKED', 'DISABLED']
    }
  }
};

export const Default = (props: ButtonProps): ReactElement => (
  <Button {...props}>
    <div>button</div>
  </Button>
);
