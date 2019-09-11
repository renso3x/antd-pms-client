import { put, call, all, takeEvery, fork } from 'redux-saga/effects';

import {
  CREATE_AMENITIES_INIT,
  CREATE_AMENITIES_SUCCESS,
  UPDATE_AMENITIES_INIT,
  UPDATE_AMENITIES_SUCCESS,
  AMENITIES_DELETE_INIT,
  AMENITIES_DELETE_SUCCESS,
  fetchAmenitiesSuccess,
  fetchAmenitiesError
} from '../reducers/amenities';

import {
  fetchAmenitiesAPI,
  postAmenitiesAPI,
  updateAmenitiesAPI,
  deleteAmenities
} from '../services/amenities';

export function* watchAmenities() {
  yield all([
    yield fork(fetchAmenities),
    yield takeEvery(CREATE_AMENITIES_INIT, createAmenities),
    yield takeEvery(UPDATE_AMENITIES_INIT, updateAmenities),
    yield takeEvery(AMENITIES_DELETE_INIT, removeAmenities)
  ]);
}

function* fetchAmenities() {
  try {
    const response = yield call(fetchAmenitiesAPI);
    yield put(fetchAmenitiesSuccess(response.data.data));
  } catch (e) {
    fetchAmenitiesError(e);
  }
}

function* createAmenities(action) {
  try {
    const result = yield call(postAmenitiesAPI, action.payload.data);
    yield put({
      type: CREATE_AMENITIES_SUCCESS,
      payload: { data: result.data.data }
    });
  } catch (e) {
    fetchAmenitiesError(e);
  }
}

function* updateAmenities(action) {
  try {
    const result = yield call(updateAmenitiesAPI, action.payload.data);
    yield put({
      type: UPDATE_AMENITIES_SUCCESS,
      payload: { data: result.data.data }
    });
  } catch (e) {
    fetchAmenitiesError(e);
  }
}

function* removeAmenities(action) {
  try {
    yield call(deleteAmenities, action.payload.data);
    yield put({
      type: AMENITIES_DELETE_SUCCESS,
      payload: { id: action.payload.data._id }
    });
  } catch (e) {
    fetchAmenitiesError(e);
  }
}
