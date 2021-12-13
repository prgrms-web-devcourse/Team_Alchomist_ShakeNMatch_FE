import { DOMAINS } from '@constants';
import Header from '@domain/Header';
import ErrorPage from '@pages/ErrorPage';
import JangoPage from '@pages/JangoPage';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import MyPage from '@pages/MyPage';
import RegisterPage from '@pages/RegisterPage';
import SearchPage from '@pages/SearchPage';
import ShoppingPage from '@pages/ShoppingPage';
import TestPage from '@pages/TestPage';
import ThemePage from '@pages/ThemePage';
import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route element={<MainPage />} path={`/${DOMAINS.main}`}></Route>
      <Route
        element={
          <>
            <Header />
            <JangoPage />
          </>
        }
        path='/jango'
      ></Route>
      <Route element={<LoginPage />} path={`/${DOMAINS.login}`}></Route>
      <Route
        element={
          <>
            <Header />
            <MyPage />
          </>
        }
        path='/user/:id'
      ></Route>
      <Route element={<RegisterPage />} path={`/${DOMAINS.register}`}></Route>
      <Route
        element={
          <>
            <Header />
            <SearchPage />
          </>
        }
        path='/search/:keyword'
      ></Route>
      <Route
        element={<ShoppingPage />}
        path={`/${DOMAINS.shopping}/:keyword`}
      ></Route>
      <Route
        element={
          <>
            <Header />
            <ThemePage />
          </>
        }
        path={`/${DOMAINS.theme}`}
      ></Route>
      <Route
        element={
          <>
            <Header />
            <ErrorPage />
          </>
        }
        path='*'
      ></Route>
      <Route element={<TestPage />} path='/test'></Route>
    </Routes>
  );
};

export { Router };
