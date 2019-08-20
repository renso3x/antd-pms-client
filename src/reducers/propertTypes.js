import initialState from './initialState';

// TYPES
export const TYPE_INIT = 'TYPE_INIT';
export const TYPE_SUCCESS_FETCH = 'TYPE_SUCCESS_FETCH';
export const TYPE_ERROR_FETCH = 'TYPE_ERROR_FETCH';
export const TYPE_CREATE_INIT = 'TYPE_CREATE_INIT';
export const TYPE_CREATE_SUCCESS = 'TYPE_CREATE_SUCCESS';
export const TYPE_UPDATE_INIT = 'TYPE_UPDATE_INIT';
export const TYPE_UPDATE_SUCCESS = 'TYPE_UPDATE_SUCCESS';
export const TYPE_DELETE_INIT = 'TYPE_DELETE_INIT';
export const TYPE_DELETE_SUCCESS = 'TYPE_DELETE_SUCCESS';

//REDUCER
export default function reducer(state = initialState.propertyTypes, action) {
  switch (action.type) {
    case TYPE_DELETE_SUCCESS:
      return {
        ...state,
        types: state.types.filter(type => type._id !== action.payload.id)
      };

    case TYPE_UPDATE_SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        types: state.types.map(type => {
          if (type._id === action.payload.data._id) {
            return action.payload.data;
          }
          return type;
        })
      };

    case TYPE_CREATE_SUCCESS:
      return {
        ...state,
        types: [...state.types, action.payload.data]
      };

    case TYPE_INIT:
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
