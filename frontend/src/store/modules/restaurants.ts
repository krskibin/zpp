import {RESTAURANTS_LIST, RESTAURANTS_LIST_NAME} from '@/store/mutationTypes';

import HTTP from '@/utils/http';


interface State {
  restaurants: object[];
  restaurantIDName: object[];
}

const state: State = {
  restaurants: [],
  restaurantIDName: [],
};

const getters = {
  getRestaurantList: (storeState: State) => storeState.restaurants,
  getRestaurantIdNameList: (storeState: State) => storeState.restaurantIDName,
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
  async getRestaurantIdName(ctx: any) {
    try {
      const response = await HTTP.get('v1/restaurants/');
      if (response.data && response.data.results instanceof Array) {
        const rest = response.data.results.map((restaurant: any) => {
          return {...{name: restaurant.name, id: restaurant.id}};
        });
        ctx.commit(RESTAURANTS_LIST_NAME, rest);
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
  [RESTAURANTS_LIST_NAME](storeState: State, payload: object[]) {
    storeState.restaurantIDName = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
