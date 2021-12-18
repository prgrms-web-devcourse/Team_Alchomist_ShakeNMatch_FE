import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { StyledContainer } from './styled';
import { Text, Image } from '@base';
import { TextButton } from '@compound';
import { HeaderPageTemplate } from '@domain';
import notFoundPage from '@assets/notFoundPage.png';

const ErrorPage = (): ReactElement => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/');
  };

  return (
    <HeaderPageTemplate>
      <StyledContainer>
        <Image mode='contain' src={notFoundPage} />
        <Text>페이지를 찾을 수 없습니다!</Text>
        <TextButton buttonType='LONG_PINK' onClick={handleClick}>
          Go to Main Page
        </TextButton>
      </StyledContainer>
    </HeaderPageTemplate>
  );
};

export default ErrorPage;
