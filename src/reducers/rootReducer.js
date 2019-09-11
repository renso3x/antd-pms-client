import { combineReducers } from 'redux';
import accomodation from './accomodation';
import propertyType from './propertTypes';
import bedConfig from './bedConfiguration';
import amenities from './amenities';

const rootReducer = combineReducers({
  accomodation,
  propertyType,
  bedConfig,
  amenities
});

export default rootReducer;
