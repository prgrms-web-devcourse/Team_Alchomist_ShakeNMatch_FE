import useSessionStorage from '@hooks/useSessionStorage';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext, useEffect } from 'react';
import type { IAuthContext, IAuthState } from './types';

const AuthorizationContext = createContext<IAuthContext | null>(null);

const useAuthorization = (): IAuthContext => {
  const state = useContext(AuthorizationContext);
  if (!state) throw new Error('there is no context!');

  return state;
};

const AuthorizationProvider = ({
  children
}: {
  children: ReactNode;
}): ReactElement => {
  const [state, setState] = useSessionStorage<IAuthState>('auth', {
    oauthToken: null,
    user: null,
    isAuthorized: false
  });

  const login = ({
    oauthToken,
    user
  }: Omit<IAuthState, 'isAuthorized'>): void => {
    setState({ oauthToken, user, isAuthorized: true });
  };

  const logout = (): void => {
    setState({ oauthToken: null, user: null, isAuthorized: false });
  };

  const setOAuthToken = (oauthToken: string): void => {
    setState({ ...state, oauthToken });
  };

  useEffect(() => {
    if (!state.isAuthorized && state.oauthToken) {
      logout();
    }
  }, []);

  return (
    <AuthorizationContext.Provider
      value={{ ...state, login, logout, setOAuthToken }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
export { useAuthorization };
