import { put, call, all, takeEvery, fork } from 'redux-saga/effects';

import {
  TYPE_CREATE_INIT,
  TYPE_CREATE_SUCCESS,
  TYPE_UPDATE_INIT,
  TYPE_DELETE_INIT,
  TYPE_UPDATE_SUCCESS,
  TYPE_DELETE_SUCCESS
} from '../reducers/propertTypes';

import { fetchTypesSuccess, fetchTypesError } from '../actions/propertTypes';

import {
  fetchPropertyTypesAPI,
  postPropertyTypeAPI,
  updatePropertyTypeAPI,
  deletePropertyType
} from '../services/property';

export function* watchfetchProperty() {
  yield all([
    yield fork(fetchPropertyTypes),
    yield takeEvery(TYPE_CREATE_INIT, createPropertyType),
    yield takeEvery(TYPE_UPDATE_INIT, updatePropertyType),
    yield takeEvery(TYPE_DELETE_INIT, removePropertyType)
  ]);
}

function* fetchPropertyTypes() {
  try {
    const types = yield call(fetchPropertyTypesAPI);
    yield put(fetchTypesSuccess(types.data.types));
  } catch (e) {
    fetchTypesError(e);
  }
}

function* createPropertyType(action) {
  try {
    const result = yield call(postPropertyTypeAPI, action.payload.data);
    // insert the new record
    yield put({
      type: TYPE_CREATE_SUCCESS,
      payload: { data: result.data.type }
    });
  } catch (e) {
    fetchTypesError(e);
  }
}

function* updatePropertyType(action) {
  try {
    const result = yield call(updatePropertyTypeAPI, action.payload.data);
    yield put({
      type: TYPE_UPDATE_SUCCESS,
      payload: { data: result.data.type }
    });
  } catch (e) {
    fetchTypesError(e);
  }
}

function* removePropertyType(action) {
  try {
    yield call(deletePropertyType, action.payload.data);
    yield put({
      type: TYPE_DELETE_SUCCESS,
      payload: { id: action.payload.data._id }
    });
  } catch (e) {
    fetchTypesError(e);
  }
}
