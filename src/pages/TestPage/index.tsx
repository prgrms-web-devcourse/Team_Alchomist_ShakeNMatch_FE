import { useAuthorization } from '@contexts/Authorization';
import type { ReactElement } from 'react';

const TestPage = (): ReactElement => {
  const { oauthToken, user, isMaster, login, logout } = useAuthorization();

  const handleLogin = (): void => {
    login({
      oauthToken: '15addg23423h4ui234',
      user: {
        id: 'mooho',
        nickName: 'Alang',
        isMan: true,
        age: 15,
        mbti: 'ESFJ'
      }
    });
  };

  const handleLogout = (): void => {
    logout();
  };

  return (
    <div>
      <button type='button' onClick={handleLogin}>
        Login!
      </button>
      <button type='button' onClick={handleLogout}>
        LogOut!
      </button>
      <div>token : {oauthToken}</div>
      <div>nickName: {user?.nickName}</div>
      <div>age: {user?.age}</div>
      <div>isMan: {user?.isMan ? 'yes!' : 'no!'}</div>
      <div>MBTI: {user?.mbti}</div>
      <div>Are You Mater? : {isMaster ? 'yes!' : 'no!'}</div>
    </div>
  );
};

export default TestPage;
