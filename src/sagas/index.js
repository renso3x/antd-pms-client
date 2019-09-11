import { all } from 'redux-saga/effects';
import * as propertySaga from './property';
import * as accomodationSaga from './accomodation';
import * as bedConfigSaga from './bedConfig';
import * as amenitiesSaga from './amenities';

export default function* rootSaga() {
  yield all([
    propertySaga.watchfetchProperty(),
    accomodationSaga.watchAccomodation(),
    bedConfigSaga.watchBedConfig(),
    amenitiesSaga.watchAmenities()
  ]);
}
