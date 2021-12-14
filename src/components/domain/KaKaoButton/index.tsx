import ImageButton from '@compound/ImageButton';
import type { ReactElement } from 'react';
import kakaoSrc from '@assets/oauthAssets/kakao_login.png';
import { useNavigate } from 'react-router';
import { DOMAINS } from '@constants';

const KaKaoButton = (): ReactElement => {
  const navigate = useNavigate();

  const handleLogin = (): void => {
    console.log('login!');
    navigate(`/${DOMAINS.register}`);
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
