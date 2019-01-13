import HTTP from '@/utils/http';
import {AUTH_SAVE_USER, AUTH_DELETE_USER, AUTH_SAVE_INFO, SEND_EMAIL} from '@/store/mutationTypes';

interface State {
  restaurantId: number | null;
  name: string;
  longitude: number;
  latitude: number;
  foodType: string;
  priceRating: number;
  veganOption: boolean;
  vegetarianOption: boolean;
  shortReview: string;
}

const state: State = {
  restaurantId: null,
  name: '',
  longitude: 0,
  latitude: 0,
  foodType: '',
  priceRating: 0,
  veganOption: false,
  vegetarianOption: false,
  shortReview: '',
};


const actions = {
  async addRestaurant(ctx: any, restaurantElement: any) {
    try {
      const response = await HTTP.post('v1/restaurants/', restaurantElement);
      return {
        success: true,
        message: 'Successfully',
      };
    } catch (error) {
      if (error.response.data) {
        return {
          success: false,
          message: 'Unable with provided credentials',
        };
      } else {
        return {
          success: false,
          message: 'Unable to connect to server',
        };
      }
    }
  },
};

const mutations = {};

export default {
  state,
  actions,
  mutations,
};

