import type { IAuthAction, IAuthState } from './types';

const authReducer = (state: IAuthState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        ...action.payload
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: null,
        oauthToken: null
      };
    default:
      throw new Error('there is no action!');
  }
};

export { authReducer };
