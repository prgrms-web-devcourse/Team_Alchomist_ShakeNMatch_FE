import type { CustomRouteProps } from './types';
import { Header } from '@domain';
import type { ReactElement } from 'react';

const PublicRoute = ({
  children,
  header = false
}: CustomRouteProps): ReactElement => {
  return (
    <>
      {header && <Header />}
      {children}
    </>
  );
};

export default PublicRoute;
