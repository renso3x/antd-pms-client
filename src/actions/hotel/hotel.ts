import axios from 'axios';
import { Dispatch } from 'redux';
import {
  HotelActionTypes,
  FetchRoomTypes,
  CreateRoomType,
  IRoomType
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
        payload: response.data
      })
    } catch (e) {
      console.error(e);
    }
  }
}

export const createRoomTypes = (payload: IRoomType) => {
  return async(dispatch: Dispatch) => {
    try {
      const hotel = await getAssocation();
      const response = await axios.post(`${API_URL}/hotels/${hotel[0].id}/room-types`, payload, {
        headers: {
          Authorization: getAuthToken()
        }
      });
      dispatch<CreateRoomType>({
        type: HotelActionTypes.createRoomType,
        payload: response.data
      });
    } catch (e) {
      console.error(e)
    }
  }
}
