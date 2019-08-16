import { combineReducers } from 'redux';
import property from './property';

const rootReducer = combineReducers({
  property: property
});

export default rootReducer;
