import { MainMenuSelector, BackButton, LoginButton } from '@domain';
import type { ReactElement } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { TextButton } from '@compound';
import { useAuthorization } from '@contexts';
import { useNavigate } from 'react-router';
import { COLOR, DOMAINS, TEXT_BUTTON_TYPE } from '@constants';
import {
  StyledLogo,
  StyledDescriptionContainer,
  StyledPageContainer
} from './styled';
import { Text } from '@base';

const LOGIN_MODAL_DELAY_MS = 1000;
let timerId: null | NodeJS.Timeout = null;

const MainPage = (): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState<'theme' | 'jango' | null>(
    null
  );
  const { isAuthorized } = useAuthorization();
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
        <Text color={COLOR.BASIC_WHITE} dangerously>
          {selectedMenu === 'theme'
            ? '테마별로 칵테일을 <br> 추천받으세요!'
            : '내 술장고 재료들로 <br> 칵테일을 추천받으세요!'}
        </Text>
        {isAuthorized || selectedMenu === 'theme' ? (
          <TextButton
            buttonType={TEXT_BUTTON_TYPE.LONG_WHITE}
            onClick={handleLink}
          >
            추천받으러 가기
          </TextButton>
        ) : (
          <LoginButton redirectUrl={`/${DOMAINS.jango}`} />
        )}
      </StyledDescriptionContainer>
    </StyledPageContainer>
  );
};

export default MainPage;
