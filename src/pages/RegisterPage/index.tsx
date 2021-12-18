import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import { useAuthorization } from '@contexts';
import { BackButton, RegisterModal } from '@domain';
import useAxios from '@hooks/useAxios';
import type { IApiResponse, IUser, IUserForm } from '@models';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import type { IRegisterRequestBody } from './types';

// test email

const RegisterPage = (): ReactElement => {
  const navigate = useNavigate();
  const request = useAxios(AXIOS_REQUEST_TYPE.AUTH);
  const { oauthToken, login, logout } = useAuthorization();

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
        // 임시 위치 ( 이후 useRedirectURL Context로 지정된 위치로 이동 예정)
        navigate('/');
      } else {
        alert('회원가입에 실패하였습니다. 이후에 다시한번 시도해주세요.');
        logout();
        navigate('/');
      }
    }
  };

  return (
    <StyledPageContainerWithBackground>
      <RegisterModal onSubmit={handleRegister} />
      <BackButton
        color='NAVY'
        onClick={(): void => {
          navigate(-1);
        }}
      />
    </StyledPageContainerWithBackground>
  );
};

export default RegisterPage;
