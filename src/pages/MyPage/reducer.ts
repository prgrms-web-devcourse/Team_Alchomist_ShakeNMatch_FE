import type { IUserForm } from '@models';

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

const postUserReducer = (
  state: PostUserState,
  action: PostUserAction
): PostUserState => {
  switch (action.type) {
    case 'API_START':
      return { value: null, isLoading: true, error: null };
    case 'API_SUCCESS':
      return { ...state, value: action.payload };
    case 'API_FAILED':
      return { ...state, error: action.payload };
    case 'API_END':
      return { ...state, isLoading: false };
  }
};

const getUserReducer = (
  state: GetUserState,
  action: GetUserAction
): GetUserState => {
  switch (action.type) {
    case 'API_START':
      return { value: null, isLoading: true, error: null };
    case 'API_SUCCESS':
      return { ...state, value: action.payload };
    case 'API_FAILED':
      return { ...state, error: action.payload };
    case 'API_END':
      return { ...state, isLoading: false };
  }
};

export { postUserReducer, getUserReducer };
