import useSessionStorage from '@hooks/useSessionStorage';
import type { ReactChild, ReactElement } from 'react';
import { useContext, createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { INavigateContext } from './types';

const RedirectPathContext = createContext<INavigateContext | null>(null);

const useCustomNavigate = (): INavigateContext => {
  const context = useContext(RedirectPathContext);
  if (!context) {
    throw new Error('there is no Context!');
  }

  return context;
};

const CustomNavigateProvider = ({
  children
}: {
  children: ReactChild | ReactChild[];
}): ReactElement => {
  const [redirectPath, setRedirectPath, clearRedirectPath] = useSessionStorage<
    string | null
  >('path', null);
  const location = useLocation();
  const navigate = useNavigate();

  const saveCurrentPath = (): void => {
    setRedirectPath(location.pathname);
  };
  const savePath = (pathname: string): void => {
    setRedirectPath(pathname);
  };

  const redirectToSavedPath = ({ replace }: { replace?: boolean }): void => {
    redirectPath && navigate(redirectPath, { replace });
    clearRedirectPath();
  };

  return (
    <RedirectPathContext.Provider
      value={{
        redirectPath,
        navigate,
        saveCurrentPath,
        savePath,
        clearRedirectPath,
        redirectToSavedPath
      }}
    >
      {children}
    </RedirectPathContext.Provider>
  );
};

export { useCustomNavigate, CustomNavigateProvider };
