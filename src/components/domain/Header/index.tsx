import Logo from '@domain/Logo';
import type { ReactElement } from 'react';
import { useCallback, useMemo } from 'react';
import { StyledHeaderContainer } from './styled';
import jangoImageSrc from '@assets/headerIcon/to_jango.png';
import loginImageSrc from '@assets/headerIcon/to_login.png';
import themeImageSrc from '@assets/headerIcon/to_theme.png';
import profileImageSrc from '@assets/headerIcon/to_profile.png';
import ImageButton from '@compound/ImageButton';
import { useAuthorization } from '@contexts';
import { useLocation, useNavigate } from 'react-router';
import { getDomain } from '@utils/lib/getDomain';
import { DOMAINS } from '@constants';

const Header = (): ReactElement => {
  const { oauthToken, user } = useAuthorization();
  const location = useLocation();
  const domain = useMemo(() => getDomain(location.pathname), [location]);
  const navigate = useNavigate();
  const handleLink = useCallback(
    (to: string): void => {
      navigate(to);
    },
    [navigate]
  );

  return (
    <StyledHeaderContainer>
      <Logo link size='sm' />
      {domain !== DOMAINS.jango && (
        <ImageButton
          mode='contain'
          size='headerIcon'
          src={jangoImageSrc}
          onClick={(): void => {
            handleLink(`/${DOMAINS.jango}`);
          }}
        />
      )}
      {domain !== DOMAINS.theme && (
        <ImageButton
          mode='contain'
          size='headerIcon'
          src={themeImageSrc}
          onClick={(): void => {
            handleLink(`/${DOMAINS.theme}`);
          }}
        />
      )}
      {oauthToken ? (
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
            handleLink(`/${DOMAINS.login}`);
          }}
        />
      )}
    </StyledHeaderContainer>
  );
};

export default Header;
