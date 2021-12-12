import type { IUser } from '@models';

interface IAuthState {
  oauthToken: string | null;
  user: IUser | null;
  isMaster?: boolean;
}

interface IAuthContext extends IAuthState {
  login(value: Omit<IAuthState, 'isMaster'>): void;
  logout(): void;
}

export type { IAuthState, IAuthContext };
