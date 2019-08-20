import initialState from './initialState';

// TYPES
export const TYPE_FETCH = 'TYPE_FETCH';
export const TYPE_SUCCESS_FETCH = 'TYPE_SUCCESS_FETCH';
export const TYPE_ERROR_FETCH = 'TYPE_ERROR_FETCH';

//REDUCER
export default function reducer(state = initialState.propertyTypes, action) {
  switch (action.type) {
    case TYPE_FETCH:
      return {
        ...state,
        isFetching: true
      };

    case TYPE_SUCCESS_FETCH:
      return {
        ...state,
        isFetching: false,
        types: action.payload.data
      };

    case TYPE_ERROR_FETCH:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
