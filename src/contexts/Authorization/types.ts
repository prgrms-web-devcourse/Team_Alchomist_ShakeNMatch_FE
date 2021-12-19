import type { ICocktailSimple, IUser } from '@models';

interface IAuthState {
  oauthToken: string | null;
  user: IUser | null;
  isAuthorized?: boolean;
}

interface IAuthContext extends IAuthState {
  bookmarkList: ICocktailSimple[];
  login(value: Omit<IAuthState, 'isMaster'>): void;
  logout(): void;
  setOAuthToken(value: string): void;
  updateContextBookmark(value: ICocktailSimple): void;
}

export type { IAuthState, IAuthContext };
