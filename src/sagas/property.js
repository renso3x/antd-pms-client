import { takeLatest, put } from 'redux-saga/effects';
import { TYPE_FETCH } from '../reducers/propertTypes';
import { fetchTypesSuccess, fetchTypesError } from '../actions/propertTypes';
import { fetchPropertyTypesAPI } from '../services/property';

export function* watchfetchProperty() {
  yield takeLatest(TYPE_FETCH, fetchPropertyTypes);
}

function* fetchPropertyTypes() {
  try {
    const types = yield fetchPropertyTypesAPI();
    yield put(fetchTypesSuccess(types.data.types));
  } catch (e) {
    fetchTypesError(e);
  }
}
