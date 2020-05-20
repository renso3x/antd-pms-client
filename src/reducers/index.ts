import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth';
import { roomTypeReducer, RoomTypeState } from './roomType';

export interface IRootState {
  auth: AuthState,
  roomTypes: RoomTypeState
}

export const rootReducers = combineReducers<IRootState>({
  auth: authReducer,
  roomTypes: roomTypeReducer
});