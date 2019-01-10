import {RESTAURANTS_LIST, RESTAURANT_ADD} from '@/store/mutationTypes';

import HTTP from '@/utils/http';


interface State {
  restaurants: object[];
}

const state: State = {
  restaurants: [],
};

const getters = {
  getRestaurantList: (storeState: State) => storeState.restaurants,
};

const actions = {
  async getRestaurants(ctx: any) {
    try {
      const response = await HTTP.get('v1/restaurants/');
      if (response.data && response.data.results instanceof Array) {
        const restaurants = response.data.results.map((restaurantList: object[]) => {
          return {...restaurantList};
        });
        ctx.commit(RESTAURANTS_LIST, restaurants);
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
  [RESTAURANTS_LIST](storeState: State, payload: object[]) {
    storeState.restaurants = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

