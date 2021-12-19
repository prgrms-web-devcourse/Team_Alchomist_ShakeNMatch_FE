import type { ReactElement } from 'react';
import { Routes, Navigate } from 'react-router-dom';
import type { RoutesProps } from 'react-router-dom';
import { useAuthorization } from '@contexts/Authorization';

const PrivateRoutes = ({ children }: RoutesProps): ReactElement => {
  const { isAuthorized } = useAuthorization();
  return isAuthorized ? (
    <Routes>{children}</Routes>
  ) : (
    <Navigate replace to='/login' />
  );
};

export default PrivateRoutes;
