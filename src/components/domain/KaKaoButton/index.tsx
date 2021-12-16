import ImageButton from '@compound/ImageButton';
import type { ReactElement } from 'react';
import kakaoSrc from '@assets/oauthAssets/kakao_login.png';
// import { useNavigate } from 'react-router';
// import { DOMAINS } from '@constants';
const { REACT_APP_BASE_URL: BASE_URL } = process.env;

const KaKaoButton = (): ReactElement => {
  // const navigate = useNavigate();
  const handleLogin = (): void => {
    window.location.assign(`${BASE_URL}/login`);
    // navigate(`/${DOMAINS.register}`);
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
