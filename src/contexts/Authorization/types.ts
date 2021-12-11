import type { IUser } from '@models';

interface IAuthState {
  oauthToken: string | null;
  user: IUser | null;
}

type IAuthAction =
  | { type: 'LOG_IN'; payload: { oauthToken: string; user: IUser } }
  | { type: 'LOG_OUT' };

export type { IAuthState, IAuthAction };
