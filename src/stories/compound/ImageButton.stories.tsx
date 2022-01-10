import { ImageButton } from '@compound';
import type { ReactElement } from 'react';
import KaKaoSrc from '@assets/oauthAssets/kakao_login.png';
import type { ImageButtonProps } from '@components/compound/ImageButton/types';
import { BUTTON_SIZE } from '@base/Button/types';

export default {
  title: 'Component/Compound/ImageButton',
  component: ImageButton,
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    dropShadow: {
      control: 'boolean'
    },
    size: {
      control: 'inline-radio',
      options: Object.keys(BUTTON_SIZE)
    }
  }
};

export const Default = ({ src, ...args }: ImageButtonProps): ReactElement => (
  <div>
    <ImageButton src={src || KaKaoSrc} {...args} />
  </div>
);
