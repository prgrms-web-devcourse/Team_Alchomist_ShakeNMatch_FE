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
      <Route element={<MainPage />} path='/'></Route>
      <Route element={<JangoPage />} path='/jango'></Route>
      <Route element={<LoginPage />} path='/login'></Route>
      <Route element={<MyPage />} path='/user/:id'></Route>
      <Route element={<RegisterPage />} path='/register'></Route>
      <Route element={<SearchPage />} path='/search/:keyword'></Route>
      <Route element={<ShoppingPage />} path='/shop/:keyword'></Route>
      <Route element={<ThemePage />} path='/theme'></Route>
      <Route element={<TestPage />} path='/test'></Route>
      <Route element={<ErrorPage />} path='*'></Route>
    </Routes>
  );
};

export { Router };
