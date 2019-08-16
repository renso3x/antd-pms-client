import http from '../services/http';
import { takeLatest, put } from 'redux-saga/effects';
import {
  FETCH_PROPERTY_START,
  FETCH_PROPERTY_SUCCESS,
  FETCH_PROPERTY_ERROR
} from '../reducers/property';

export function* watchfetchProperty() {
  yield takeLatest(FETCH_PROPERTY_START, fetchProperty);
}

function* fetchProperty() {
  try {
    const properties = yield http.get('/properties');
    yield put({ type: FETCH_PROPERTY_SUCCESS, payload: properties });
  } catch (e) {
    yield put({ type: FETCH_PROPERTY_ERROR });
  }
}
