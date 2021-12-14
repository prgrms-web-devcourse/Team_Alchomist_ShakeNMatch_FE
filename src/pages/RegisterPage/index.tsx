import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import BackButton from '@domain/BackButton';
import RegisterModal from '@domain/RegisterModal';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';

const RegisterPage = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <StyledPageContainerWithBackground>
      <RegisterModal />
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
