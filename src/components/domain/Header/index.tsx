import { Logo } from '@domain';
import type { ReactElement } from 'react';
import { useCallback, useMemo } from 'react';
import { StyledHeaderContainer } from './styled';
import jangoImageSrc from '@assets/headerIcon/to_jango.png';
import loginImageSrc from '@assets/headerIcon/to_login.png';
import themeImageSrc from '@assets/headerIcon/to_theme.png';
import profileImageSrc from '@assets/headerIcon/to_profile.png';
import ImageButton from '@compound/ImageButton';
import { useAuthorization } from '@contexts';
import { useLocation } from 'react-router';
import { getDomain } from '@utils/lib/getDomain';
import { DOMAINS } from '@constants';
import { Tooltip } from '@base';
import { useCustomNavigate } from '@contexts/CustomNavigate';

const Header = (): ReactElement => {
  const { user, isAuthorized } = useAuthorization();
  const { navigate, saveCurrentPath, savePath } = useCustomNavigate();
  const location = useLocation();

  const domain = useMemo(() => getDomain(location.pathname), [location]);
  const handleLink = useCallback(
    (to: string): void => {
      savePath(to);
      navigate(to);
    },
    [navigate]
  );

  return (
    <StyledHeaderContainer>
      <Logo className='logo' link size='sm' />
      {domain !== DOMAINS.jango && (
        <Tooltip
          direction='bottom'
          tooltipMessage='내가 가지고 있는 재료를 기반으로 칵테일 추천받기!'
          tooltipMessageSize='xs'
          tooltipSize='md'
        >
          <ImageButton
            mode='contain'
            size='headerIcon'
            src={jangoImageSrc}
            onClick={(): void => {
              handleLink(`/${DOMAINS.jango}`);
            }}
          />
        </Tooltip>
      )}
      {domain !== DOMAINS.theme && (
        <Tooltip
          direction='bottom'
          tooltipMessage='테마별로 칵테일 추천받기!'
          tooltipMessageSize='xs'
          tooltipSize='sm'
        >
          <ImageButton
            mode='contain'
            size='headerIcon'
            src={themeImageSrc}
            onClick={(): void => {
              handleLink(`/${DOMAINS.theme}`);
            }}
          />
        </Tooltip>
      )}
      {isAuthorized ? (
        <ImageButton
          mode='contain'
          size='headerIcon'
          src={profileImageSrc}
          onClick={(): void => {
            handleLink(`/${DOMAINS.profile}/${user?.id}`);
          }}
        />
      ) : (
        <ImageButton
          mode='contain'
          size='headerIcon'
          src={loginImageSrc}
          onClick={(): void => {
            saveCurrentPath();
            handleLink(`/${DOMAINS.login}`);
          }}
        />
      )}
    </StyledHeaderContainer>
  );
};

export default Header;
