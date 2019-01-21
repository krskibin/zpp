import {RESTAURANT_ID} from '@/store/mutationTypes';
import {OPINION_ID} from '@/store/mutationTypes';

import HTTP from '@/utils/http';


interface State {
  restaurant: object[];
  opinions: object[];

}

const state: State = {
  restaurant: [],
  opinions: [],

};

const getters = {
  getRestaurantElement: (storeState: State) => storeState.restaurant,
  getOpinions: (storeState: State) => storeState.opinions,

};

const actions = {
  async getRestaurant(ctx: any, id: number) {
    try {
      const response = await HTTP.get(`v1/restaurants/${id}`);
      if (response.data) {
        const restaurant = response.data;
        ctx.commit(RESTAURANT_ID, restaurant);
      }
    } catch (error) {
      return {
        success: 'false',
        message: error,
      };
    }
  },
  async getRestaurantOpinion(ctx: any, id: number) {
    try {
      const response = await HTTP.get(`v1/opinions/`);
      if (response.data  && response.data.results instanceof Array) {
        function isRestaurantOpinion(elem, i, array){
            return elem.restaurant==id
        }
        const opinions = response.data.results.filter(isRestaurantOpinion);
        ctx.commit(OPINION_ID, opinions);
      }
    } catch (error) {
      return {
        success: 'false',
        message: error,
      };
    }
  },
};

const mutations = {
  [RESTAURANT_ID](storeState: State, payload: object[]) {
    storeState.restaurant = payload;
  },
  [OPINION_ID](storeState: State, payload: object[]) {
    storeState.opinions = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
