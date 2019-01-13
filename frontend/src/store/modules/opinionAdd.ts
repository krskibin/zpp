import HTTP from '@/utils/http';
import {AUTH_SAVE_USER, AUTH_DELETE_USER, AUTH_SAVE_INFO, SEND_EMAIL} from '@/store/mutationTypes';

interface State {
  date: string;
  receiptNumber: string;
  restaurant: number;
  foodReview: number;
  climateReview: number;
  staffReview: number;
  priceReview: number;
}

const state: State = {
  date: '',
  receiptNumber: '',
  restaurant: 0,
  foodReview: 0,
  climateReview: 0,
  staffReview: 0,
  priceReview: 0,
};


const actions = {
  async addOpinion(ctx: any, opinionElement: any) {
    try {
      const response = await HTTP.post('v1/restaurants/', opinionElement);
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

