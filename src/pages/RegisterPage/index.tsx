import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import { COLOR, AXIOS_REQUEST_TYPE, DOMAINS } from '@constants';
import { useAuthorization } from '@contexts';
import { BackButton, RegisterModal } from '@domain';
import { useCustomNavigate } from '@contexts/CustomNavigate';
import { useAxios } from '@hooks';
import type { IApiResponse, IUser, IUserForm } from '@models';
import type { ReactElement } from 'react';
import type { IRegisterRequestBody } from './types';

// test email

const RegisterPage = (): ReactElement => {
  const request = useAxios(AXIOS_REQUEST_TYPE.AUTH);
  const { oauthToken, login, logout } = useAuthorization();
  const { navigate, redirectToSavedPath, redirectPath } = useCustomNavigate();

  const postRegister = (
    data: IRegisterRequestBody
  ): Promise<IApiResponse<IUser>> => {
    return request.post('/user', data);
  };

  const handleRegister = async (value: IUserForm): Promise<void> => {
    const { nickname, age, gender, mbti } = value;
    if (nickname && age && gender && mbti) {
      const { data } = await postRegister({
        nickname,
        age,
        mbti,
        isMan: gender === '남자' ? true : false
      });
      if (data) {
        login({ oauthToken, user: data });

        redirectPath ? redirectToSavedPath() : navigate(`/${DOMAINS.main}`);
      } else {
        alert('회원가입에 실패하였습니다. 이후에 다시한번 시도해주세요.');
        logout();
        navigate(`/${DOMAINS.main}`);
      }
    }
  };

  return (
    <StyledPageContainerWithBackground>
      <RegisterModal onSubmit={handleRegister} />
      <BackButton
        color={COLOR.NAVY}
        onClick={(): void => {
          navigate(-1);
        }}
      />
    </StyledPageContainerWithBackground>
  );
};

export default RegisterPage;
