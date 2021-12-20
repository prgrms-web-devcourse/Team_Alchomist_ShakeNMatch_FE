import type { ReactElement } from 'react';
import Button from '@base/Button';
import type { ButtonProps } from '@base/Button/types';

export default {
  title: 'Component/Base/Button',
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
    basicColor: {
      control: 'select',
      options: [
        'BASIC_WHITE',
        'LIGHT_GRAY',
        'DARK_GRAY',
        'BLACK',
        'LIGHT_PINK',
        'BASIC_PINK',
        'MIDDLE_PINK',
        'STRONG_PINK',
        'NAVY',
        'ORANGE',
        'VIOLET',
        'IVORY',
        'LIGHT_YELLOW',
        'DARK_YELLOW',
        'BLUE',
        'GREEN'
      ]
    },
    hoverColor: {
      control: 'select',
      options: [
        undefined,
        'BASIC_WHITE',
        'LIGHT_GRAY',
        'DARK_GRAY',
        'BLACK',
        'LIGHT_PINK',
        'BASIC_PINK',
        'MIDDLE_PINK',
        'STRONG_PINK',
        'NAVY',
        'ORANGE',
        'VIOLET',
        'IVORY',
        'LIGHT_YELLOW',
        'DARK_YELLOW',
        'BLUE',
        'GREEN'
      ]
    },
    clickedColor: {
      control: 'select',
      options: [
        undefined,
        'BASIC_WHITE',
        'LIGHT_GRAY',
        'DARK_GRAY',
        'BLACK',
        'LIGHT_PINK',
        'BASIC_PINK',
        'MIDDLE_PINK',
        'STRONG_PINK',
        'NAVY',
        'ORANGE',
        'VIOLET',
        'IVORY',
        'LIGHT_YELLOW',
        'DARK_YELLOW',
        'BLUE',
        'GREEN'
      ]
    },
    disabled: {
      control: 'boolean'
    }
  }
};

export const Default = (props: ButtonProps): ReactElement => (
  <Button {...props}>
    <div>button</div>
  </Button>
);
