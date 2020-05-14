import { LoginAction, LoginActionTypes } from '../actions/auth';

export interface AuthState {
  isAuthenticated: boolean;
  token: string
}

const initialState = {
  isAuthenticated: false,
  token: ''
}

export const authReducer = (state: AuthState = initialState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionTypes.makeLogin:
      return { ...state, isAuthenticated: true, token: action.payload };

    default:
      return state;
  }
}