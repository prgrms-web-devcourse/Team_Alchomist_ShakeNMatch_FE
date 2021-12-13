import MainMenuSelector from '@domain/MainMenuSelector';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import {
  StyledBackButton,
  StyledKaKaoButton,
  StyledLogo,
  StyledLogoContainer,
  StyledPageContainer
} from './styled';
import kakaoSrc from '@assets/oauthAssets/kakao_login.png';

const LOGIN_MODAL_DELAY_MS = 1000;
let timerId: null | NodeJS.Timeout = null;

const MainPage = (): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState<'theme' | 'jango' | null>(
    null
  );
  const [isShowLoginButton, setIsShowLoginButton] = useState(false);

  useEffect(() => {
    if (selectedMenu === 'jango') {
      timerId = setTimeout((): void => {
        setIsShowLoginButton(true);
      }, LOGIN_MODAL_DELAY_MS);
    } else {
      setIsShowLoginButton(false);
    }

    return (): void => {
      if (timerId) clearTimeout(timerId);
    };
  }, [selectedMenu]);

  const handleLogin = (): void => {
    console.log('login!');
  };

  return (
    <StyledPageContainer selectedMenu={selectedMenu}>
      <StyledBackButton
        visible={!!selectedMenu}
        onClick={(): void => {
          setSelectedMenu(null);
        }}
      />
      <MainMenuSelector
        selectedMenu={selectedMenu}
        onMenuSelected={(menu): void => {
          setSelectedMenu(menu);
        }}
      />
      <StyledLogo className='logo' size='md' />
      <StyledLogoContainer>
        <StyledKaKaoButton
          size='kakao'
          src={kakaoSrc}
          style={{ opacity: isShowLoginButton ? 1 : 0 }}
          type='button'
          onClick={handleLogin}
        />
      </StyledLogoContainer>
    </StyledPageContainer>
  );
};

export default MainPage;
