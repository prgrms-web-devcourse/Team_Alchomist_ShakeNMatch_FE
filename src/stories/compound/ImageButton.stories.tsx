import ImageButton from '@components/compound/ImageButton';
import type { ReactElement } from 'react';
import KaKaoSrc from '@assets/oauthAssets/kakao_login.png';
import GoogleSrc from '@assets/oauthAssets/google_login.png';

export default {
  title: 'Component/Compound/ImageButton',
  component: ImageButton
};

export const Default = (): ReactElement => (
  <div>
    <ImageButton dropShadow={false} size='kakao' src={KaKaoSrc} type='button' />
    <ImageButton
      disabled
      dropShadow={false}
      size='google'
      src={GoogleSrc}
      type='button'
    />
  </div>
);
