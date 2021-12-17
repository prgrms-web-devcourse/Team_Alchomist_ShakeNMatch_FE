// import { request } from '@apis/config';
import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import { useAuthorization } from '@contexts';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// const POST_AUTHORIZED_CODE_URL = '';

const OAuthKaKaoPage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setOAuthToken } = useAuthorization();

  const token = searchParams.get('token');
  const needInfo = searchParams.get('needInfo');

  useEffect(() => {
    if (token) {
      setOAuthToken(token);
      setSearchParams({}, { replace: true });
      needInfo === 'true' ? navigate('/register') : navigate('/'); // 로그인시에는 별도
      // handlePostCode();
    } else {
      navigate('/');
    }
  }, []);

  return (
    <StyledPageContainerWithBackground>
      잠시기다려주세요...
    </StyledPageContainerWithBackground>
  );
};

export default OAuthKaKaoPage;
