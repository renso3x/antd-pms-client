export interface IRoomType {
  name: string;
  description: string;
}

// Action Type Enum
export enum HotelActionTypes {
  getRoomTypes,
  createRoomType
}

// Dispatch Actions
export interface FetchRoomTypes {
  type: HotelActionTypes.getRoomTypes,
  payload: IRoomType[]
}

export interface CreateRoomType {
  type: HotelActionTypes.createRoomType,
  payload: IRoomType
}

// Room Action Types
export type RoomTypeActions = FetchRoomTypes | CreateRoomType;
