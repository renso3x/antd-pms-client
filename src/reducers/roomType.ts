import { RoomTypeActions, IRoomType, HotelActionTypes } from '../actions/hotel';

export interface RoomTypeState {
  types: IRoomType[];
}

const initialState = {
  types: []
}

export const roomTypeReducer = (state:RoomTypeState = initialState, action: RoomTypeActions) => {
  switch(action.type) {
    case HotelActionTypes.getRoomTypes:
      return {
        ...state,
        types: action.payload,
      };

    default:
      return state;
  }
}