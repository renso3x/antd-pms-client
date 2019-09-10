import { combineReducers } from 'redux';
import accomodation from './accomodation';
import propertyType from './propertTypes';
import bedConfig from './bedConfiguration';

const rootReducer = combineReducers({
  accomodation,
  propertyType,
  bedConfig
});

export default rootReducer;
