import type { CustomRouteProps } from './types';
import { Header } from '@domain';
import type { ReactElement } from 'react';
import { useAuthorization } from '@contexts';
import { Navigate } from 'react-router';

const PublicRoute = ({
  children,
  header = false
}: CustomRouteProps): ReactElement => {
  const { isAuthorized } = useAuthorization();

  return isAuthorized ? (
    <>
      {header ? (
        <div style={{ margin: '0 100px' }}>
          <Header /> {children}
        </div>
      ) : (
        children
      )}
    </>
  ) : (
    <Navigate to={'/login'} />
  );
};

export default PublicRoute;
