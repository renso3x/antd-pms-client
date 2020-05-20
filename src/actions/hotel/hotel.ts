import axios from 'axios';
import { Dispatch } from 'redux';
import {
  HotelActionTypes,
  FetchRoomTypes
} from './types';
import { API_URL } from '../../config/constant';
import { getAuthToken } from '../auth';
/**
 * Room Types Services
 */
export const getAllRoomTypes = (hotelId: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/hotels/${hotelId}/room-types`, {
        headers: {
          Authorization: getAuthToken()
        }
      });
      dispatch<FetchRoomTypes>({
        type: HotelActionTypes.getRoomTypes,
        payload: response.data.roomtypes
      })
    } catch (e) {
      console.error(e);
    }
  }
}