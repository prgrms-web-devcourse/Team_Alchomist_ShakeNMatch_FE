import { DOMAINS } from '@constants';
import {
  ErrorPage,
  JangoPage,
  LoginPage,
  MainPage,
  MyPage,
  OAuthKaKaoPage,
  RegisterPage,
  SearchPage,
  ShoppingPage,
  ThemePage
} from '@pages';
import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router';
import JangoProvider from '@contexts/Jango';
import PrivateRoute from './CustomRoutes/PrivateRoute';
import PublicRoute from './CustomRoutes/PublicRoute';

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route
        element={
          <PublicRoute>
            <MainPage />
          </PublicRoute>
        }
        path={`/${DOMAINS.main}`}
      ></Route>
      <Route
        element={
          <PrivateRoute header>
            <JangoProvider>
              <JangoPage />
            </JangoProvider>
          </PrivateRoute>
        }
        path='/jango'
      ></Route>
      <Route
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
        path={`/${DOMAINS.login}`}
      ></Route>
      <Route
        element={
          <PrivateRoute header>
            <MyPage />
          </PrivateRoute>
        }
        path='/user/:id'
      ></Route>
      <Route
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
        path={`/${DOMAINS.register}`}
      ></Route>
      <Route
        element={
          <PublicRoute header>
            <SearchPage />
          </PublicRoute>
        }
        path='/search/:keyword'
      ></Route>
      <Route
        element={
          <PrivateRoute>
            <ShoppingPage />
          </PrivateRoute>
        }
        path={`/${DOMAINS.shopping}/:keyword`}
      ></Route>
      <Route
        element={
          <PublicRoute header>
            <ThemePage />
          </PublicRoute>
        }
        path={`/${DOMAINS.theme}`}
      ></Route>
      <Route
        element={
          <PublicRoute>
            <OAuthKaKaoPage />
          </PublicRoute>
        }
        path={`/${DOMAINS.oauthKaKao}`}
      />
      <Route
        element={
          <PublicRoute>
            <ErrorPage />
          </PublicRoute>
        }
        path='*'
      ></Route>
    </Routes>
  );
};

export { Router };
