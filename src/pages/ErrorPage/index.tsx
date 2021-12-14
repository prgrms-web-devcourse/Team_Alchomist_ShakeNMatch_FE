import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { StyledContainer } from './styled';
import { Text, Image } from '@base';
import TextButton from '@compound/TextButton';
import notFoundPage from '@assets/notFoundPage.png';

const ErrorPage = (): ReactElement => {
  const navigator = useNavigate();

  const handleClick = (): void => {
    navigator('/');
  };

  return (
    <StyledContainer>
      <Image mode='contain' src={notFoundPage} />
      <Text>페이지를 찾을 수 없습니다!</Text>
      <TextButton buttonType='LONG_PINK' onClick={handleClick}>
        Go to Main Page
      </TextButton>
    </StyledContainer>
  );
};

export default ErrorPage;
