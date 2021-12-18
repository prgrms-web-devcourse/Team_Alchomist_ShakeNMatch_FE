import type { CustomRouteProps } from './types';
import { Header } from '@domain';
import type { ReactElement } from 'react';
import { useAuthorization } from '@contexts';
import LoginPage from '@pages/LoginPage';

const PublicRoute = ({
  children,
  header = false
}: CustomRouteProps): ReactElement => {
  const { isAuthorized } = useAuthorization();

  return isAuthorized ? (
    <>
      {header && <Header />}
      {children}
    </>
  ) : (
    <LoginPage />
  );
};

export default PublicRoute;
