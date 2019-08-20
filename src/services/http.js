import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(
  function(response) {
    if (response.data.status === 500) {
      toast.error('An unexpected error occurred.');
      return Object.assign({}, response, {
        status: 500
      });
    }
    // Do something before request is sent
    return response;
  },
  function(error) {
    console.log(error);
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      // console.log("logging the error", error);
      // alert("An unexpected error occurred.");
      toast.error('An unexpected error occurred.');
    }
    // Do something with request error
    return Promise.reject(error);
  }
);

function setJWT(token) {
  axios.defaults.headers.common['x-auth-token'] = token;
}

export default {
  setJWT: setJWT,
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};