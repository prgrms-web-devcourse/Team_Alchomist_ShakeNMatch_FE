import type { ReactElement } from 'react';
import { useCustomNavigate } from '@contexts/CustomNavigate';
import type { LoginButtonProps } from './types';
import { DOMAINS } from '@constants';
import { TextButton } from '@compound';
// import { useNavigate } from 'react-router';
// import { DOMAINS } from '@constants';
const { REACT_APP_BASE_URL: BASE_URL } = process.env;

const OPEN_WINDOW_WIDTH = 500;
const OPEN_WINDOW_HEIGHT = 600;

const LoginButton = ({ redirectUrl }: LoginButtonProps): ReactElement => {
  const { savePath, navigate } = useCustomNavigate();
  const handleLogin = (): void => {
    redirectUrl && savePath(redirectUrl);
    // window.location.assign(
    // );
    // window.open(
    //   `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${BASE_URL}/login/oauth2/code/kakao&response_type=code`,
    //   '_blank',
    //   `fullscreen=no, width=${OPEN_WINDOW_WIDTH}, height=${OPEN_WINDOW_HEIGHT},
    //   top=${(window.innerHeight - OPEN_WINDOW_HEIGHT) / 2 + screenY}px,
    //   left=${(window.innerWidth - OPEN_WINDOW_WIDTH) / 2 + screenX}px
    //   `
    // );
    window.open(
      `${BASE_URL}/login`,
      '_blank',
      `fullscreen=no, width=${OPEN_WINDOW_WIDTH}, height=${OPEN_WINDOW_HEIGHT},
        top=${(window.innerHeight - OPEN_WINDOW_HEIGHT) / 2 + screenY}px,
        left=${(window.innerWidth - OPEN_WINDOW_WIDTH) / 2 + screenX}px
        `
    );
    navigate(`/${DOMAINS.oauthKaKao}?loading=true`);
    // window.location.assign(`${BASE_URL}/login`);
  };

  return (
    <TextButton buttonType='LONG_PINK' onClick={handleLogin}>
      로그인 하기
    </TextButton>
  );
};

export default LoginButton;
