import type { ICocktailSimple, IUserForm } from '@models';

interface PostUserState {
  value: string | null;
  isLoading: boolean;
  error: any;
}
type PostUserAction =
  | { type: 'API_START' }
  | { type: 'API_SUCCESS'; payload: string }
  | { type: 'API_FAILED'; payload: any }
  | { type: 'API_END' };

interface GetUserState {
  value: IUserForm | null;
  isLoading: boolean;
  error: any;
}
type GetUserAction =
  | { type: 'API_START' }
  | { type: 'API_SUCCESS'; payload: IUserForm }
  | { type: 'API_FAILED'; payload: any }
  | { type: 'API_END' };

interface GetBookmarkState {
  value: ICocktailSimple[] | null;
  isLoading: boolean;
  error: any;
}
type GetBookmarkAction =
  | { type: 'API_START' }
  | { type: 'API_SUCCESS'; payload: ICocktailSimple[] }
  | { type: 'API_FAILED' }
  | { type: 'API_END' };

export type {
  PostUserState,
  PostUserAction,
  GetUserAction,
  GetUserState,
  GetBookmarkState,
  GetBookmarkAction
};
