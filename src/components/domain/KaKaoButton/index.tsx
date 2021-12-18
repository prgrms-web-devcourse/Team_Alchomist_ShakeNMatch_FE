import ImageButton from '@compound/ImageButton';
import type { ReactElement } from 'react';
import kakaoSrc from '@assets/oauthAssets/kakao_login.png';
import { useCustomNavigate } from '@contexts/CustomNavigate';
import type { KaKaoButtonProps } from './types';
// import { useNavigate } from 'react-router';
// import { DOMAINS } from '@constants';
const { REACT_APP_BASE_URL: BASE_URL } = process.env;

// CLIENT_ID NOTION 참고
// const REDIRECT_URI = `${BASE_URL}/login/oauth2/code/kakao`;
// const REDIRECT_URI = `${BASE_URL}/login`;

const KaKaoButton = ({ redirectUrl }: KaKaoButtonProps): ReactElement => {
  const { savePath } = useCustomNavigate();
  const handleLogin = (): void => {
    // window.location.assign(
    //   `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&state=alchomist`
    // );
    redirectUrl && savePath(redirectUrl);
    window.location.assign(`${BASE_URL}/login`);
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
