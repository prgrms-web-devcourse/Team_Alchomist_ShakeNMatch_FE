import type { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoutes from '../PrivateRoutes';
import { MyPage } from '@pages';

const MyPageRoutes = (): ReactElement => {
  return (
    <PrivateRoutes>
      <Route element={<MyPage />} path='/' />
    </PrivateRoutes>
  );
};

export default MyPageRoutes;
