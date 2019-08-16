import { all } from 'redux-saga/effects';
import { watchfetchProperty } from './property';

export default function* rootSaga() {
  yield all([watchfetchProperty()]);
}
