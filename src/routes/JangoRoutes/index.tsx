import type { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoutes from '../PrivateRoutes';
import { JangoPage } from '@pages';

const JangoRoutes = (): ReactElement => {
  return (
    <PrivateRoutes>
      <Route element={<JangoPage />} path='/' />
    </PrivateRoutes>
  );
};

export default JangoRoutes;
