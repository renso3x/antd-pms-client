import initialState from './initialState';

export const FETCH_BED_CONFIGURATION_SYNC = 'FETCH_BED_CONFIGURATION_SYNC';
export const BED_CONFIGURATION_SYNC_SUCCESS = 'BED_CONFIGURATION_SYNC_SUCCESS';
export const BED_CONFIGURATION_ERROR = 'BED_CONFIGURATION_ERROR';
export const CREATE_BED_CONFIGURATION_INIT = 'CREATE_BED_CONFIGURATION_INIT';
export const CREATE_BED_CONFIGURATION_SUCCESS =
  'CREATE_BED_CONFIGURATION_SUCCESS';
export const UPDATE_BED_CONFIGURATION_INIT = 'UPDATE_BED_CONFIGURATION_INIT';
export const UPDATE_BED_CONFIGURATION_SUCCESS =
  'UPDATE_BED_CONFIGURATION_SUCCESS';
export const BED_CONFIGURATION_DELETE_INIT = 'BED_CONFIGURATION_DELETE_INIT';
export const BED_CONFIGURATION_DELETE_SUCCESS =
  'BED_CONFIGURATION_DELETE_SUCCESS';

export default function reducer(state = initialState.bedConfig, action) {
  switch (action.type) {
    case BED_CONFIGURATION_SYNC_SUCCESS:
      return {
        ...state,
        list: action.payload.data
      };

    case CREATE_BED_CONFIGURATION_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.data]
      };

    case UPDATE_BED_CONFIGURATION_SUCCESS:
      return {
        ...state,
        list: state.list.map(listing => {
          if (listing._id === action.payload.data._id) {
            return action.payload.data;
          }
          return listing;
        })
      };
    case BED_CONFIGURATION_DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(type => type._id !== action.payload.id)
      };

    default:
      return state;
  }
}

//actions

export const fetchBedConfigSuccess = data => ({
  type: BED_CONFIGURATION_SYNC_SUCCESS,
  payload: { data }
});

export const fetchBedConfigError = error => ({
  type: BED_CONFIGURATION_ERROR,
  payload: { error }
});

export const createBedConfig = data => ({
  type: CREATE_BED_CONFIGURATION_INIT,
  payload: { data }
});

export const updateBedConfig = data => ({
  type: UPDATE_BED_CONFIGURATION_INIT,
  payload: { data }
});

export const deleteBedConfig = data => ({
  type: BED_CONFIGURATION_DELETE_INIT,
  payload: { data }
});
