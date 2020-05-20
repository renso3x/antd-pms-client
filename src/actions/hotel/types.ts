export interface RoomType {
  name: string;
  description: string;
}

// Action Type Enum
export enum HotelActionTypes {
  getRoomTypes
}

// Dispatch Actions
export interface FetchRoomTypes {
  type: HotelActionTypes.getRoomTypes,
  payload: RoomType[]
}

// Room Action Types
export type RoomTypeActions = FetchRoomTypes;
