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

const RegisterPage = (): ReactElement => {
  const navigate = useNavigate();
  const request = useAxios(AXIOS_REQUEST_TYPE.AUTH);

  const postRegister = (
    data: IRegisterRequestBody
  ): Promise<IUser | undefined> => {
    return request.post('/user', data);
  };

  const handleRegister = async (value: IUserForm): Promise<any> => {
    console.log(value);
    console.log('posting!');
    const { nickname, age, gender, mbti } = value;
    if (nickname && age && gender && mbti) {
      const data = await postRegister({
        nickname,
        age,
        mbti,
        isMan: gender === '남자' ? true : false
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
