import { combineReducers } from 'redux';
import property from './property';
import propertyType from './propertTypes';

const rootReducer = combineReducers({
  property: property,
  propertyType: propertyType
});

export default rootReducer;
