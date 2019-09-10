import { put, call, all, takeEvery, fork } from 'redux-saga/effects';

import {
  CREATE_BED_CONFIGURATION_INIT,
  CREATE_BED_CONFIGURATION_SUCCESS,
  UPDATE_BED_CONFIGURATION_INIT,
  UPDATE_BED_CONFIGURATION_SUCCESS,
  BED_CONFIGURATION_DELETE_INIT,
  BED_CONFIGURATION_DELETE_SUCCESS,
  fetchBedConfigSuccess,
  fetchBedConfigError
} from '../reducers/bedConfiguration';

import {
  fetchBedConfigAPI,
  postBedConfigAPI,
  updateBedConfigAPI,
  deleteBedConfig
} from '../services/bedConfig';

export function* watchBedConfig() {
  yield all([
    yield fork(fetchBedConfigs),
    yield takeEvery(CREATE_BED_CONFIGURATION_INIT, createBedConfig),
    yield takeEvery(UPDATE_BED_CONFIGURATION_INIT, updateBedConfig),
    yield takeEvery(BED_CONFIGURATION_DELETE_INIT, removeBedConfig)
  ]);
}

function* fetchBedConfigs() {
  try {
    const response = yield call(fetchBedConfigAPI);
    yield put(fetchBedConfigSuccess(response.data.beds));
  } catch (e) {
    fetchBedConfigError(e);
  }
}

function* createBedConfig(action) {
  try {
    const result = yield call(postBedConfigAPI, action.payload.data);
    yield put({
      type: CREATE_BED_CONFIGURATION_SUCCESS,
      payload: { data: result.data.bed }
    });
  } catch (e) {
    fetchBedConfigError(e);
  }
}

function* updateBedConfig(action) {
  try {
    const result = yield call(updateBedConfigAPI, action.payload.data);
    yield put({
      type: UPDATE_BED_CONFIGURATION_SUCCESS,
      payload: { data: result.data.bed }
    });
  } catch (e) {
    fetchBedConfigError(e);
  }
}

function* removeBedConfig(action) {
  try {
    yield call(deleteBedConfig, action.payload.data);
    yield put({
      type: BED_CONFIGURATION_DELETE_SUCCESS,
      payload: { id: action.payload.data._id }
    });
  } catch (e) {
    fetchBedConfigError(e);
  }
}
