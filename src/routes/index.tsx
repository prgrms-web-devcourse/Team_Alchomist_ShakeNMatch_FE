import { DOMAINS } from '@constants';
import ErrorPage from '@pages/ErrorPage';
import JangoPage from '@pages/JangoPage';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import MyPage from '@pages/MyPage';
import OAuthKaKaoPage from '@pages/OAuthKaKaoPage';
import RegisterPage from '@pages/RegisterPage';
import SearchPage from '@pages/SearchPage';
import ShoppingPage from '@pages/ShoppingPage';
import ThemePage from '@pages/ThemePage';
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
