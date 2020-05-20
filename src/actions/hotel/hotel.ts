import axios from 'axios';
import { Dispatch } from 'redux';
import {
  HotelActionTypes,
  FetchRoomTypes
} from './types';
import { API_URL } from '../../config/constant';
import { getAuthToken, getAssocation } from '../auth';
/**
 * Room Types Services
 */
export const getAllRoomTypes = () => {
  return async (dispatch: Dispatch) => {
    try {
      const hotel = await getAssocation();

      const response = await axios.get(`${API_URL}/hotels/${hotel[0].id}/room-types`, {
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