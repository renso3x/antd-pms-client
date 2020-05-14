import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth';

export interface IRootState {
  auth: AuthState,
}

export const rootReducers = combineReducers<IRootState>({
  auth: authReducer
});