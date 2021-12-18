import MainMenuSelector from '@domain/MainMenuSelector';
import type { ReactElement } from 'react';
import { useEffect, useState, useCallback } from 'react';
import {
  StyledLogo,
  StyledDescriptionContainer,
  StyledPageContainer
} from './styled';
import TextButton from '@compound/TextButton';
import { useAuthorization } from '@contexts';
import { useNavigate } from 'react-router';
import { DOMAINS } from '@constants';
import BackButton from '@domain/BackButton';
import KaKaoButton from '@domain/KaKaoButton';
import { Text } from '@base';
import { ThemeSelector } from '@domain';

const LOGIN_MODAL_DELAY_MS = 1000;
let timerId: null | NodeJS.Timeout = null;

const MainPage = (): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState<'theme' | 'jango' | null>(
    null
  );
  const { user } = useAuthorization();
  const [isShowButton, setIsShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsShowButton(false);
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
      <StyledDescriptionContainer
        style={{ display: isShowButton ? 'flex' : 'none' }}
      >
        <ThemeSelector />
        <Text color='BASIC_WHITE' dangerously>
          {selectedMenu === 'theme'
            ? '테마별로 칵테일을 <br> 추천받으세요!'
            : '내 술장고 재료들로 <br> 칵테일을 추천받으세요!'}
        </Text>
        {user || selectedMenu === 'theme' ? (
          <TextButton buttonType='LONG_PINK' onClick={handleLink}>
            추천받으러 가기
          </TextButton>
        ) : (
          <KaKaoButton />
        )}
      </StyledDescriptionContainer>
    </StyledPageContainer>
  );
};

export default MainPage;
