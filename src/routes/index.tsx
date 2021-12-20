import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router';
import { DOMAINS } from '@constants';
import {
  ErrorPage,
  LoginPage,
  MainPage,
  OAuthKaKaoPage,
  RegisterPage,
  SearchPage,
  ThemePage
} from '@pages';
import JangoRoutes from './JangoRoutes';
import MyPageRoutes from './MyPageRoutes';
import ShoppingPageRoutes from './ShoppingPageRoutes';

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route element={<MainPage />} path={`/${DOMAINS.main}`}></Route>
      <Route element={<JangoRoutes />} path={`/${DOMAINS.jango}`}></Route>
      <Route element={<LoginPage />} path={`/${DOMAINS.login}`}></Route>
      <Route
        element={<MyPageRoutes />}
        path={`/${DOMAINS.profile}/:id`}
      ></Route>
      <Route element={<RegisterPage />} path={`/${DOMAINS.register}`}></Route>
      <Route
        element={<SearchPage />}
        path={`/${DOMAINS.search}/:keyword`}
      ></Route>
      <Route
        element={<ShoppingPageRoutes />}
        path={`/${DOMAINS.shopping}/:keyword`}
      ></Route>
      <Route element={<ThemePage />} path={`/${DOMAINS.theme}`}></Route>
      <Route element={<OAuthKaKaoPage />} path={`/${DOMAINS.oauthKaKao}`} />
      <Route element={<ErrorPage />} path='*'></Route>
    </Routes>
  );
};

export { Router };
