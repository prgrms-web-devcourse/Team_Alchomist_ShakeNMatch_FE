import type { IUser } from '@models';

interface IAuthState {
  oauthToken: string | null;
  user: IUser | null;
  isAuthorized?: boolean;
}

interface IAuthContext extends IAuthState {
  setAuthState(value: Omit<IAuthState, 'isMaster'>): void;
  clearAuthState(): void;
  setOAuthToken(value: string): void;
}

export type { IAuthState, IAuthContext };
