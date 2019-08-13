import jwtDecode from 'jwt-decode';
import httpRequest from './http';

const tokenKey = 'token';

export const setToken = token => {
  localStorage.setItem(tokenKey, token);
};

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};

export const removeToken = () => {
  localStorage.clear();
};

export const authenticate = payload => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/api/auth`;

  return httpRequest.post(apiUrl, payload);
};
