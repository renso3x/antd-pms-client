import initialState from './initialState';

export const FETCH_AMENITIES_SYNC = 'FETCH_AMENITIES_SYNC';
export const AMENITIES_SYNC_SUCCESS = 'AMENITIES_SYNC_SUCCESS';
export const AMENITIES_ERROR = 'AMENITIES_ERROR';
export const CREATE_AMENITIES_INIT = 'CREATE_AMENITIES_INIT';
export const CREATE_AMENITIES_SUCCESS = 'CREATE_AMENITIES_SUCCESS';
export const UPDATE_AMENITIES_INIT = 'UPDATE_AMENITIES_INIT';
export const UPDATE_AMENITIES_SUCCESS = 'UPDATE_AMENITIES_SUCCESS';
export const AMENITIES_DELETE_INIT = 'AMENITIES_DELETE_INIT';
export const AMENITIES_DELETE_SUCCESS = 'AMENITIES_DELETE_SUCCESS';

export default function reducer(state = initialState.amenities, action) {
  switch (action.type) {
    case AMENITIES_SYNC_SUCCESS:
      return {
        ...state,
        list: action.payload.data
      };

    case CREATE_AMENITIES_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.data]
      };

    case UPDATE_AMENITIES_SUCCESS:
      return {
        ...state,
        list: state.list.map(listing => {
          if (listing._id === action.payload.data._id) {
            return action.payload.data;
          }
          return listing;
        })
      };

    case AMENITIES_DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(type => type._id !== action.payload.id)
      };

    default:
      return state;
  }
}

//actions
export const fetchAmenitiesSuccess = data => ({
  type: AMENITIES_SYNC_SUCCESS,
  payload: { data }
});

export const fetchAmenitiesError = error => ({
  type: AMENITIES_ERROR,
  payload: { error }
});

export const createAmenities = data => ({
  type: CREATE_AMENITIES_INIT,
  payload: { data }
});

export const updateAmenities = data => ({
  type: UPDATE_AMENITIES_INIT,
  payload: { data }
});

export const deleteAmenities = data => ({
  type: AMENITIES_DELETE_INIT,
  payload: { data }
});
