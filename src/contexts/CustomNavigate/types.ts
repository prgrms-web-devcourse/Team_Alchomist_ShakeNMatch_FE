import type { NavigateFunction } from 'react-router-dom';

interface INavigateContext {
  navigate: NavigateFunction;
  redirectPath?: string | null;
  saveCurrentPath(): void;
  savePath(pathname: string): void;
  clearRedirectPath(): void;
  redirectToSavedPath(): void;
}

export type { INavigateContext };
