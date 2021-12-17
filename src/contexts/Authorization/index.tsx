import useSessionStorage from '@hooks/useSessionStorage';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext } from 'react';
import type { IAuthContext, IAuthState } from './types';

const MASTER_ID = 'mooho';

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

  const setAuthState = ({
    oauthToken,
    user
  }: Omit<IAuthState, 'isAuthorized'>): void => {
    let isAuthorized = false;
    if (user?.id === MASTER_ID) {
      isAuthorized = true;
    }

    setState({ oauthToken, user, isAuthorized });
  };

  const clearAuthState = (): void => {
    setState({ oauthToken: null, user: null, isAuthorized: false });
  };

  const setOAuthToken = (oauthToken: string): void => {
    setState({ ...state, oauthToken });
  };

  return (
    <AuthorizationContext.Provider
      value={{ ...state, setAuthState, clearAuthState, setOAuthToken }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
export { useAuthorization };
