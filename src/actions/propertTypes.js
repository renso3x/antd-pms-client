import {
  TYPE_SUCCESS_FETCH,
  TYPE_ERROR_FETCH,
  TYPE_CREATE_INIT,
  TYPE_UPDATE_INIT,
  TYPE_DELETE_INIT
} from '../reducers/propertTypes';

export const fetchTypesSuccess = data => ({
  type: TYPE_SUCCESS_FETCH,
  payload: { data }
});

export const fetchTypesError = error => ({
  type: TYPE_ERROR_FETCH,
  payload: { error }
});

export const createTypes = data => ({
  type: TYPE_CREATE_INIT,
  payload: { data }
});

export const updateTypes = data => ({
  type: TYPE_UPDATE_INIT,
  payload: { data }
});

export const deleteTypes = data => ({
  type: TYPE_DELETE_INIT,
  payload: { data }
});
