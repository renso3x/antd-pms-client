import { LoginAction, LoginActionTypes } from '../actions/auth';

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
  association: any[];
}

const initialState = {
  isAuthenticated: false,
  token: '',
  association: []
}

export const authReducer = (state: AuthState = initialState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionTypes.makeLogin:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        association: action.payload.association
      };

    default:
      return state;
  }
}