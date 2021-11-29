import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import type { ReactElement } from 'react';
import type { ButtonSizeType, ButtonColorType } from '../types';
import Button from '../components/base/Button';

export default {
  title: 'Component/Button',
  component: Button
};

interface ButtonProps {
  children: ReactElement<TextProps>;
  type: 'button' | 'reset' | 'submit';
  size: ButtonSizeType;
  color: ButtonColorType;
}

export const Default = (props: ButtonProps): ReactJSXElement => (
  <Button {...props}>
    <div>hi</div>
  </Button>
);
