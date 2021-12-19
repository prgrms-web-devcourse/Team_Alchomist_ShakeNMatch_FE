import type { ICocktailSimple, IUser } from '@models';

interface IAuthState {
  oauthToken: string | null;
  user: IUser | null;
  isAuthorized?: boolean;
}

interface IAuthContext extends IAuthState {
  login(value: Omit<IAuthState, 'isMaster'>): void;
  logout(): void;
  setUserIngredients(ingredients: any): void;
  setOAuthToken(value: string): void;
  updateContextBookmark(value: ICocktailSimple): void;
}

export type { IAuthState, IAuthContext };
