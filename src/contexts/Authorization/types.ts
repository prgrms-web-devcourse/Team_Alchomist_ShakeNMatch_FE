import type { IUser } from '@models';

interface IAuthState {
  oauthToken: string | null;
  user: IUser | null;
  isMaster?: boolean;
}

interface IAuthContext extends IAuthState {
  setAuthState(value: Omit<IAuthState, 'isMaster'>): void;
  clearAuthState(): void;
}

export type { IAuthState, IAuthContext };
