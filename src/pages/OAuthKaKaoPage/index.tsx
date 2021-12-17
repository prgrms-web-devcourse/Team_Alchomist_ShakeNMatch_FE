// import { request } from '@apis/config';
import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import { Loader } from '@compound';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import { useAuthorization } from '@contexts';
import useAxios from '@hooks/useAxios';
import type { IApiResponse, IUser } from '@models';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StyledLoaderContainer } from './styled';

// const POST_AUTHORIZED_CODE_URL = '';

const OAuthKaKaoPage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setOAuthToken, login } = useAuthorization();
  const request = useAxios(AXIOS_REQUEST_TYPE.AUTH);
  const token = searchParams.get('token');
  const needInfo = searchParams.get('needInfo');

  const getUser = (token: string): Promise<IApiResponse<IUser>> => {
    return request.get('/user', { headers: { token } });
  };

  useEffect(() => {
    const handleLogin = async (token: string): Promise<void> => {
      const { data } = await getUser(token);
      login({ oauthToken: token, user: data });
      // 임시 위치 ( 이후 useRedirectURL Context로 위치 기억하여 이동 예정)
      navigate('/jango');
    };

    if (token) {
      setOAuthToken(token);
      setSearchParams({}, { replace: true });
      needInfo === 'true' ? navigate('/register') : handleLogin(token); // 로그인시에는 별도
    } else {
      navigate('/');
    }
  }, []);

  return (
    <StyledPageContainerWithBackground>
      <StyledLoaderContainer>
        <Loader />
      </StyledLoaderContainer>
    </StyledPageContainerWithBackground>
  );
};

export default OAuthKaKaoPage;
