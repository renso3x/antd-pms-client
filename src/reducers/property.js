import initialState from './initialState';

export const FETCH_PROPERTY_START = 'FETCH_PROPERTY_START';
export const FETCH_PROPERTY_SUCCESS = 'FETCH_PROPERTY_SUCCESS';
export const FETCH_PROPERTY_ERROR = 'FETCH_PROPERTY_ERROR';

export default function propertyReducer(state = initialState.property, action) {
  //switch case...
  switch (action.type) {
    case FETCH_PROPERTY_START:
      return { ...state, loading: true };

    case FETCH_PROPERTY_SUCCESS:
      return { ...state, loading: false, properties: action.payload };

    case FETCH_PROPERTY_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
