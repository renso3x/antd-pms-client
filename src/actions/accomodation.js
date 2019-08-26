import * as types from '../reducers/accomodation';

export const fetchAccomodationSuccess = data => ({
  type: types.ACCOMODATION_SYNC_SUCCESS,
  payload: { data }
});

export const fetchAccomodationError = error => ({
  type: types.ACCOMODATION_ERROR,
  payload: { error }
});

export const createAccomodation = data => ({
  type: types.CREATE_ACCOMODATION_INIT,
  payload: { data }
});

export const updateAccomodation = data => ({
  type: types.UPDATE_ACCOMODATION_INIT,
  payload: { data }
});

export const deleteAccomodation = data => ({
  type: types.DELETE_ACCOMODATION_INIT,
  payload: { data }
});
