import useSessionStorage from '@hooks/useSessionStorage';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext, useEffect } from 'react';
import type { IAuthContext, IAuthState } from './types';
import type { ICocktailSimple } from '@models/types';

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

  const updateContextBookmark = (toggledCocktail: ICocktailSimple): void => {
    const prevBookmarks = state.user?.bookmarks;
    let nextBookmarks: ICocktailSimple[] = [];
    if (prevBookmarks) {
      if (
        prevBookmarks.some((cocktail) => cocktail.id === toggledCocktail.id)
      ) {
        nextBookmarks = prevBookmarks.filter(
          (cocktail) => cocktail.id !== toggledCocktail.id
        );
      } else {
        nextBookmarks = [...prevBookmarks, toggledCocktail];
      }
    }
    if (state.user) {
      setState({
        ...state,
        user: {
          ...state.user,
          bookmarks: nextBookmarks
        }
      });
    }
  };

  useEffect(() => {
    if (!state.isAuthorized && state.oauthToken) {
      logout();
    }
  }, []);

  const setUserIngredients = (ingredientsList: any): void => {
    state.user &&
      setState({
        ...state,
        user: { ...state.user, ingredients: ingredientsList }
      });
  };

  return (
    <AuthorizationContext.Provider
      value={{
        ...state,
        login,
        logout,
        setOAuthToken,
        updateContextBookmark,
        setUserIngredients
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
export { useAuthorization };
