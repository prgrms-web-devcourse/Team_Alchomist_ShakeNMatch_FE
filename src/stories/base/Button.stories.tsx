import type { ReactElement, ReactNode } from 'react';
import Button from '@base/Button';
import type { ButtonSizeKeys, ButtonColorType } from '@base/Button/types';

export default {
  title: 'Component/Button',
  component: Button
};

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'reset' | 'submit';
  size: ButtonSizeKeys;
  color: ButtonColorType;
}

export const Default = (props: ButtonProps): ReactElement => (
  <Button {...props}>
    <div>hi</div>
  </Button>
);
