import { combineReducers } from 'redux';
import accomodation from './accomodation';
import propertyType from './propertTypes';

const rootReducer = combineReducers({
  accomodation: accomodation,
  propertyType: propertyType
});

export default rootReducer;
