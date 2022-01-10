// import { request } from '@apis/config';
import { Text } from '@base';
import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import { Loader } from '@compound';
import { COLOR, DOMAINS, AXIOS_REQUEST_TYPE } from '@constants';
import { useAuthorization } from '@contexts';
import { useCustomNavigate } from '@contexts/CustomNavigate';
import { BackButton } from '@domain';
import useAxios from '@hooks/useAxios';
import type { IApiResponse, IUser } from '@models';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledLoaderContainer } from './styled';

// const POST_AUTHORIZED_CODE_URL = '';
const LOCAL_STORAGE_KEY = 'temp';
const INTERVAL_DELAY = 1000;

const OAuthKaKaoPage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setOAuthToken, login } = useAuthorization();
  const { navigate, redirectToSavedPath, redirectPath } = useCustomNavigate();
  const request = useAxios(AXIOS_REQUEST_TYPE.AUTH);
  const tokenParams = searchParams.get('token');
  const needInfoParams = searchParams.get('needInfo');
  const loadingParams = searchParams.get('loading');
  const getUser = (token: string): Promise<IApiResponse<IUser>> => {
    return request.get('/user', { headers: { token } });
  };

  const handleLogin = async (token: string): Promise<void> => {
    try {
      const { data } = await getUser(token);
      if (data) {
        login({ oauthToken: token, user: data });
        redirectPath
          ? redirectToSavedPath({ replace: true })
          : navigate(`/${DOMAINS.main}`, { replace: true });
      }
    } catch (e) {
      console.error(e);
      alert('로그인에 실패하였습니다! 다시 시도해주세요');
      navigate(`/${DOMAINS.main}`);
    }
  };

  const parseStorage = (
    temp: string
  ): { token: string; needInfo: string } | void => {
    try {
      const data = JSON.parse(temp);
      if (data) {
        return data;
      }
    } catch (e) {
      console.error(e);
    }
  };

  //
  useEffect(() => {
    if (tokenParams && needInfoParams) {
      const temp = { token: tokenParams, needInfo: needInfoParams };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(temp));
      setSearchParams({});
      window.close();
    }
  }, []);

  useEffect(() => {
    const checkStorage = (): void => {
      const temp = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
      if (temp) {
        const data = parseStorage(temp);
        if (data) {
          localStorage.removeItem(LOCAL_STORAGE_KEY);
          const { token, needInfo } = data;
          if (needInfo === 'true') {
            setOAuthToken(token);
            navigate(`/${DOMAINS.register}`);
          } else if (token) {
            handleLogin(token);
          }
        }
      }
    };

    if (loadingParams) {
      const timerId = setInterval(checkStorage, INTERVAL_DELAY);

      return (): void => {
        clearInterval(timerId);
      };
    }
  }, []);

  return (
    <StyledPageContainerWithBackground>
      <StyledLoaderContainer>
        <Text bold color={COLOR.NAVY} dangerously>
          {'로그인 중입니다. <br> 잠시만 기다려주세요...'}
        </Text>
        <Loader />
        <BackButton
          color='NAVY'
          onClick={(): void => {
            navigate(`/${DOMAINS.main}`);
          }}
        />
      </StyledLoaderContainer>
    </StyledPageContainerWithBackground>
  );
};

export default OAuthKaKaoPage;
