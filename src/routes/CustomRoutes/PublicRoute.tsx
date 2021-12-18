import type { CustomRouteProps } from './types';
import { Header } from '@domain';
import type { ReactElement } from 'react';

const PublicRoute = ({
  children,
  header = false
}: CustomRouteProps): ReactElement => {
  return (
    <>
      {header ? (
        <div style={{ margin: '0 100px' }}>
          <Header /> {children}
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default PublicRoute;
