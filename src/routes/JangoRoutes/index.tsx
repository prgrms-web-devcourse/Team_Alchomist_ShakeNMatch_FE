import type { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoutes from '../PrivateRoutes';
import { JangoPage } from '@pages';
import JangoProvider from '@contexts/Jango';

const JangoRoutes = (): ReactElement => {
  return (
    <PrivateRoutes>
      <Route
        element={
          <JangoProvider>
            <JangoPage />
          </JangoProvider>
        }
        path='/'
      />
    </PrivateRoutes>
  );
};

export default JangoRoutes;
