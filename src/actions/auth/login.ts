import axios from 'axios';
import { Dispatch } from 'redux';
import { LoginActionTypes } from './types';
import { API_URL } from '../../config/constant';

export const getAuthToken = () => {
  return localStorage.getItem('token');
}

export const getAssocation = async () => {
  const obj = await localStorage.getItem('association');
  if (obj) return JSON.parse(obj);
}

export const removeToken = () => {
  return localStorage.clear();
}

export interface ILogin {
  email: string;
  password: string;
}

// Generic dispatch function
export interface LoginMakeAuthAction {
  type: LoginActionTypes.makeLogin;
  payload: {
    token: string;
    association: any;
  }
}

export const getToken = localStorage.getItem('token');

export const makeLogin = (auth: ILogin, cb: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/authenticate`, auth);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('association', JSON.stringify(response.data.hotel));

      dispatch<LoginMakeAuthAction>({
        type: LoginActionTypes.makeLogin,
        payload: {
          token: response.data.token,
          association: response.data.hotel
        }
      });
      cb();
    } catch (e) {
      console.error('Error: ', e);
    }
  }
}
