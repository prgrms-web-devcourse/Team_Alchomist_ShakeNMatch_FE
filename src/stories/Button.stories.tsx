import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import type { ReactChildren } from 'react';
import type { ButtonSizeType } from '../types';
import Button from '../components/base/Button';

export default {
  title: 'Component/Button',
  component: Button
};

interface ButtonProps {
  children: ReactChildren;
  type: 'button' | 'reset' | 'submit';
  size: ButtonSizeType;
  color: 'grey';
}

export const Default = (props: ButtonProps): ReactJSXElement => (
  <Button color='default' size='sm' type='button'>
    {props.children}
  </Button>
);
