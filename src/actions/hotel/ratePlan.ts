import axios from 'axios';
import {
  RatePlanPayload
} from './types';
import { API_URL } from '../../config/constant';
import { getAuthToken, getAssocation } from '../auth';

export const createRatePlan = async(payload: RatePlanPayload) => {
  try {
    const hotel = await getAssocation();
    const { roomType, ...rest } = payload;
    const ratePlanPayload = {
      "name": rest.name,
      "inclusions":rest.inclusion,
      "min_adult": rest.minAdult,
      "max_adult": rest.maxAdult,
      "min_child": rest.minChild,
      "max_child": rest.maxChild,
      "default_rate": roomType.rate
    };
    await axios.post(`${API_URL}/hotels/${hotel[0].id}/room-types/${roomType.id}/rate-plans`,
      ratePlanPayload, {
      headers: {
        Authorization: getAuthToken()
      }
    });
  } catch (e) {
    console.error(e)
  }
}
