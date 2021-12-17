import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import BackButton from '@domain/BackButton';
import RegisterModal from '@domain/RegisterModal';
import useAxios from '@hooks/useAxios';
import type { IUser, IUserForm } from '@models';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import type { IRegisterRequestBody } from './types';

// test email
const TEST_EMAIL = 'rlaangh77@naver.com';

const RegisterPage = (): ReactElement => {
  const navigate = useNavigate();
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const postRegister = (
    data: IRegisterRequestBody
  ): Promise<IUser | undefined> => {
    return request.post('/user/join', data);
  };

  const handleRegister = async (value: IUserForm): Promise<any> => {
    console.log(value);
    console.log(TEST_EMAIL);
    console.log('posting!');
    const { nickname, age, gender, mbti } = value;
    if (nickname && age && gender && mbti) {
      const data = await postRegister({
        nickname,
        age,
        mbti,
        isMan: gender === '남자' ? true : false,
        email: TEST_EMAIL
      });
      console.log(data);
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
