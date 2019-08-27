import initialState from './initialState';

export const FETCH_ACCOMODATION_SYNC = 'FETCH_ACCOMODATION_SYNC';
export const ACCOMODATION_SYNC_SUCCESS = 'ACCOMODATION_SYNC_SUCCESS';
export const ACCOMODATION_ERROR = 'ACCOMODATION_ERROR';
export const CREATE_ACCOMODATION_INIT = 'CREATE_ACCOMODATION_INIT';
export const CREATE_ACCOMODATION_SUCCESS = 'CREATE_ACCOMODATION_SUCCESS';
export const UPDATE_ACCOMODATION_INIT = 'UPDATE_ACCOMODATION_INIT';
export const UPDATE_ACCOMODATION_SUCCESS = 'UPDATE_ACCOMODATION_SUCCESS';

export default function reducer(state = initialState.accomodation, action) {
  switch (action.type) {
    case ACCOMODATION_SYNC_SUCCESS:
      return {
        ...state,
        listings: action.payload.data
      };

    case CREATE_ACCOMODATION_SUCCESS:
      return {
        ...state,
        listings: [...state.listings, action.payload.data]
      };

    case UPDATE_ACCOMODATION_SUCCESS:
      return {
        ...state,
        listings: state.listings.map(listing => {
          if (listing._id === action.payload.data._id) {
            return action.payload.data;
          }
          return listing;
        })
      };

    default:
      return state;
  }
}
