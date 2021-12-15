import { request } from '@apis/config';
import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const POST_AUTHORIZED_CODE_URL = '';

const OAuthKaKaoPage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const code = searchParams.get('code');

  const handlePostCode = async (): Promise<void> => {
    const data = await request.post(POST_AUTHORIZED_CODE_URL, code);

    console.log(data);
  };

  useEffect(() => {
    if (code) {
      setSearchParams({}, { replace: true });
      handlePostCode();
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
