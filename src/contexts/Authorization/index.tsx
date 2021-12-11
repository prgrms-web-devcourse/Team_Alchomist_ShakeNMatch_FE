import useSessionStorage from '@hooks/useSessionStorage';
import type { IUser } from '@models';
import type { Dispatch, ReactElement, ReactNode } from 'react';
import { createContext, useReducer, useContext, useEffect } from 'react';
import { authReducer } from './reducer';
import type { IAuthAction, IAuthState } from './types';

const AuthorizationStateContext = createContext<IAuthState | null>(null);
const AuthorizationDispatchContext =
  createContext<Dispatch<IAuthAction> | null>(null);

const useAuthorization = (): [
  IAuthState | null,
  Dispatch<IAuthAction> | null
] => {
  const state = useContext(AuthorizationStateContext);
  const dispatch = useContext(AuthorizationDispatchContext);

  return [state, dispatch];
};

const AuthorizationProvider = ({
  children
}: {
  children: ReactNode;
}): ReactElement => {
  const [oauthToken, saveOauthToken] = useSessionStorage<string | null>(
    'token',
    null
  );
  const [user, saveUser] = useSessionStorage<IUser | null>('user', null);
  const [state, dispatch] = useReducer(authReducer, {
    oauthToken,
    user
  });

  useEffect(() => {
    saveOauthToken(state.oauthToken);
    saveUser(state.user);
  }, [state]);

  console.log('rerender!');

  return (
    <AuthorizationStateContext.Provider value={state}>
      <AuthorizationDispatchContext.Provider value={dispatch}>
        {children}
      </AuthorizationDispatchContext.Provider>
    </AuthorizationStateContext.Provider>
  );
};

export default AuthorizationProvider;
export { useAuthorization };
