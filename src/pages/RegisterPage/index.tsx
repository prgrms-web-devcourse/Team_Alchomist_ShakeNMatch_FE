import { request } from '@apis/config';
import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import BackButton from '@domain/BackButton';
import RegisterModal from '@domain/RegisterModal';
import type { IUser, IUserForm } from '@models';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';

// test email
const TEST_EMAIL = 'rlaangh77@naver.com';

const RegisterPage = (): ReactElement => {
  const navigate = useNavigate();

  const postRegister = async (
    values: Partial<IUser>
  ): Promise<IUser | undefined> => {
    console.log(values);
    const data = await request.post<IUser, IUser>('/user/join', values);
    if (data) {
      return data;
    }
  };

  const handleRegister = async (value: IUserForm): Promise<any> => {
    console.log(value);
    console.log(TEST_EMAIL);
    console.log('posting!');
    const { nickname, age, gender, mbti } = value;
    request.get('user/nickname/alangGY').then((data) => {
      console.log(data);
    });
    const data = await postRegister({
      nickname,
      age,
      mbti,
      isMan: gender === '남자' ? true : false,
      email: TEST_EMAIL
    });
    console.log(data);
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
