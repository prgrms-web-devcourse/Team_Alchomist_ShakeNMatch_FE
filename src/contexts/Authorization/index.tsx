import useSessionStorage from '@hooks/useSessionStorage';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext, useEffect } from 'react';
import type { IAuthContext, IAuthState } from './types';

// const MOCK_INGREDIENTS = [
//   {
//     id: 4,
//     name: '생크림',
//     type: 'cream',
//     measure: 'ml',
//     cocktails: [],
//     alcohol: false
//   },
//   {
//     id: 11,
//     name: '샐러리 소금',
//     type: 'herb',
//     measure: '취향껏',
//     cocktails: [],
//     alcohol: false
//   },
//   {
//     id: 16,
//     name: '레몬 주스',
//     type: 'juice',
//     measure: 'ml',
//     cocktails: [],
//     alcohol: false
//   },
//   {
//     id: 52,
//     name: '깔루아',
//     type: 'liquor',
//     measure: 'ml',
//     cocktails: [],
//     alcohol: true
//   },
//   {
//     id: 75,
//     name: '화이트 럼',
//     type: 'liquor',
//     measure: 'ml',
//     cocktails: [],
//     alcohol: true
//   }
// ];

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
  const [state, setState, clearState] = useSessionStorage<IAuthState>('auth', {
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
    clearState();
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
