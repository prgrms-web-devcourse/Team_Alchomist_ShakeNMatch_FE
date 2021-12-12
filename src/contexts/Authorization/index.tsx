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
    isMaster: false
  });

  const login = ({ oauthToken, user }: Omit<IAuthState, 'isMaster'>): void => {
    let isMaster = false;
    if (user?.id === MASTER_ID) {
      isMaster = true;
    }

    setState({ oauthToken, user, isMaster });
  };

  const logout = (): void => {
    setState({ oauthToken: null, user: null, isMaster: false });
  };

  return (
    <AuthorizationContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
export { useAuthorization };
