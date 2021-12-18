import type {
  GetBookmarkAction,
  GetBookmarkState,
  GetUserAction,
  GetUserState,
  PostUserAction,
  PostUserState
} from './types';

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

const getBookmarkReducer = (
  state: GetBookmarkState,
  action: GetBookmarkAction
): GetBookmarkState => {
  switch (action.type) {
    case 'API_START':
      return { value: null, isLoading: true, error: null };
    case 'API_SUCCESS':
      return { ...state, value: action.payload };
    case 'API_FAILED':
      return { ...state, value: [] };
    case 'API_END':
      return { ...state, isLoading: false };
  }
};

export { postUserReducer, getUserReducer, getBookmarkReducer };
