import { RESTAURANT_ID } from '@/store/mutationTypes';

import HTTP from '@/utils/http';


interface State {
  restaurant: object[];
}

const state: State = {
  restaurant: [],
};

const getters = {
  getRestaurantElement: (storeState: State) => storeState.restaurant,
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
};

const mutations = {
  [RESTAURANT_ID](storeState: State, payload: object[]) {
    storeState.restaurant = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

