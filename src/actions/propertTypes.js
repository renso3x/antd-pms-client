import {
  TYPE_FETCH,
  TYPE_SUCCESS_FETCH,
  TYPE_ERROR_FETCH
} from '../reducers/propertTypes';

export const initFetchTypes = () => ({
  type: TYPE_FETCH
});

export const fetchTypesSuccess = data => ({
  type: TYPE_SUCCESS_FETCH,
  payload: { data }
});

export const fetchTypesError = error => ({
  type: TYPE_ERROR_FETCH,
  payload: { error }
});
