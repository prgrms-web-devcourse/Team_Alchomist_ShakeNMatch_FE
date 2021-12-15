import ImageButton from '@compound/ImageButton';
import type { ReactElement } from 'react';
import kakaoSrc from '@assets/oauthAssets/kakao_login.png';
import { DOMAINS } from '@constants';

// CLIENT_ID NOTION 참고
const CLIENT_ID = '#';
const REDIRECT_URI = `${location.origin}/${DOMAINS.oauthKaKao}`;
const KaKaoButton = (): ReactElement => {
  const handleLogin = (): void => {
    console.log('login!');
    window.location.assign(
      `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
    );
  };

  return (
    <ImageButton
      size='kakao'
      src={kakaoSrc}
      type='button'
      onClick={handleLogin}
    />
  );
};

export default KaKaoButton;
