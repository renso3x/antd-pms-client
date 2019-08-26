import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import * as types from '../reducers/accomodation';
import * as action from '../actions/accomodation';
import * as service from '../services/accomodation';

export function* watchAccomodation() {
  yield all([
    yield fork(fetchAccomodations),
    yield takeEvery(types.CREATE_ACCOMODATION_INIT, createAccomodation),
    yield takeEvery(types.UPDATE_ACCOMODATION_INIT, updateAccomodation),
    yield takeEvery(types.DELETE_ACCOMODATION_INIT, removeAccomodation)
  ]);
}

function* fetchAccomodations() {
  try {
    const response = yield call(service.fetchAccomodationsAPI);
    yield put(action.fetchAccomodationSuccess(response.data.data));
  } catch (e) {
    action.fetchAccomodationError(e);
  }
}

function* createAccomodation(action) {
  try {
    const result = yield call(service.postAccomodationAPI, action.payload.data);
    // insert the new record
    yield put({
      type: types.CREATE_ACCOMODATION_SUCCESS,
      payload: { data: result.data.type }
    });
  } catch (e) {
    action.fetchAccomodationError(e);
  }
}

function* updateAccomodation(action) {
  try {
    const result = yield call(
      action.updateAccomodationAPI,
      action.payload.data
    );
    yield put({
      type: types.UPDATE_ACCOMODATION_SUCCESS,
      payload: { data: result.data.type }
    });
  } catch (e) {
    action.fetchAccomodationError(e);
  }
}

function* removeAccomodation(action) {
  try {
    yield call(service.deleteAccomodation, action.payload.data);
    yield put({
      type: types.DELETE_ACCOMODATION_SUCCESS,
      payload: { id: action.payload.data._id }
    });
  } catch (e) {
    action.fetchAccomodationError(e);
  }
}
