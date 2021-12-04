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
      options: ['sm', 'md', 'lg']
    },
    color: {
      control: 'inline-radio',
      options: ['dark', 'primary', 'light']
    }
  }
};

export const Default = (props: ButtonProps): ReactElement => (
  <Button {...props}>
    <div>button</div>
  </Button>
);
