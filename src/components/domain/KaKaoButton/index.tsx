import ImageButton from '@compound/ImageButton';
import type { ReactElement } from 'react';
import kakaoSrc from '@assets/oauthAssets/kakao_login.png';
import { useCustomNavigate } from '@contexts/CustomNavigate';
import type { KaKaoButtonProps } from './types';
import { DOMAINS } from '@constants';
// import { useNavigate } from 'react-router';
// import { DOMAINS } from '@constants';
const { REACT_APP_BASE_URL: BASE_URL } = process.env;

const KaKaoButton = ({ redirectUrl }: KaKaoButtonProps): ReactElement => {
  const { savePath, navigate } = useCustomNavigate();
  const handleLogin = (): void => {
    // window.location.assign(
    //   `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&state=alchomist`
    // );
    redirectUrl && savePath(redirectUrl);
    window.open(
      `${BASE_URL}/login`,
      '__blank',
      'fullscreen=no, menubar=no, location=no, left=50, top=50, width=500, height=600, resizable=no'
    );
    navigate(`/${DOMAINS.oauthKaKao}?loading=true`);
    // window.location.assign(`${BASE_URL}/login`);
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
