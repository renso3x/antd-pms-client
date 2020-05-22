export interface IRoomType {
  id?: number | undefined;
  name: string;
  description: string;
  rate: number;
  rateplans?: RatePlan[];
}

export type Inclusions = 'breakfast' | 'lunch' | 'dinner' | 'all inclusive';

export interface RatePlan {
  id?: number | undefined;
  name: string;
  inclusion?: Inclusions;
  minAdult: number;
  maxAdult: number;
  minChild: number;
  maxChild: number;
  defaultRate: number;
}

export interface RatePlanPayload {
  name: string;
  inclusion?: Inclusions;
  minAdult: number;
  maxAdult: number;
  minChild: number;
  maxChild: number;
  roomType: IRoomType;
}

// Action Type Enum
export enum HotelActionTypes {
  getRoomTypes,
  createRoomType,
  createRatePlan
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

export interface CreateRatePlan {
  type: HotelActionTypes.createRatePlan,
  payload: RatePlan
}

// Room Action Types
export type RoomTypeActions = FetchRoomTypes | CreateRoomType | CreateRatePlan;
