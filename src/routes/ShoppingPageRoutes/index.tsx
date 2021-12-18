import type { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoutes from '../PrivateRoutes';
import { ShoppingPage } from '@pages';

const ShoppingPageRoutes = (): ReactElement => {
  return (
    <PrivateRoutes>
      <Route element={<ShoppingPage />} path='/' />
    </PrivateRoutes>
  );
};

export default ShoppingPageRoutes;
