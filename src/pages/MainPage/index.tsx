import MainMenuSelector from '@domain/MainMenuSelector';
import type { ReactElement } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { StyledLogo, StyledLogoContainer, StyledPageContainer } from './styled';
import TextButton from '@compound/TextButton';
import { useAuthorization } from '@contexts';
import { useNavigate } from 'react-router';
import { DOMAINS } from '@constants';
import BackButton from '@domain/BackButton';
import KaKaoButton from '@domain/KaKaoButton';

const LOGIN_MODAL_DELAY_MS = 1000;
let timerId: null | NodeJS.Timeout = null;

const MainPage = (): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState<'theme' | 'jango' | null>(
    null
  );
  const { oauthToken } = useAuthorization();
  const [isShowButton, setIsShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedMenu) {
      timerId = setTimeout((): void => {
        setIsShowButton(true);
      }, LOGIN_MODAL_DELAY_MS);
    } else {
      setIsShowButton(false);
    }

    return (): void => {
      if (timerId) clearTimeout(timerId);
    };
  }, [selectedMenu]);

  const handleLink = useCallback((): void => {
    if (selectedMenu) {
      navigate(`/${DOMAINS[selectedMenu]}`);
    }
  }, [selectedMenu]);

  return (
    <StyledPageContainer selectedMenu={selectedMenu}>
      {selectedMenu && (
        <BackButton
          onClick={(): void => {
            setSelectedMenu(null);
          }}
        />
      )}
      <MainMenuSelector
        selectedMenu={selectedMenu}
        onMenuSelected={(menu): void => {
          setSelectedMenu(menu);
        }}
      />
      <StyledLogo className='logo' size='md' />
      <StyledLogoContainer style={{ display: isShowButton ? 'flex' : 'none' }}>
        {oauthToken || selectedMenu === 'theme' ? (
          <TextButton buttonType='LONG_WHITE' onClick={handleLink}>
            Click!
          </TextButton>
        ) : (
          <KaKaoButton />
        )}
      </StyledLogoContainer>
    </StyledPageContainer>
  );
};

export default MainPage;
