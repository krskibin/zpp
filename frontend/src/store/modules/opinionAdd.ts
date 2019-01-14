import HTTP from '@/utils/http';

interface State {
  date: string;
  receiptNumber: string;
  restaurant: number;
  food_review: number;
  climate_review: number;
  staff_review: number;
  price_review: number;
  short_review: string;
}

const state: State = {
    date: '',
    receiptNumber: '',
    restaurant: 0,
    food_review: 0,
    climate_review: 0,
    staff_review: 0,
    price_review: 0,
    short_review: '',
  };


const actions = {
  async addOpinion(ctx: any, opinionElement: any) {
    try {
      const response = await HTTP.post('v1/opinions/', opinionElement);
      return {
        success: true,
        message: 'Successfully',
      };
    } catch (error) {
      if (error.response.data) {
        return {
          success: false,
          message: 'Unable with provided data',
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

