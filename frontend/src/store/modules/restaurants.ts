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
  async addRestaurant(ctx: any, restaurant: any) {
    try {
      const response = await HTTP.post('v1/restaurants/', restaurant);
      ctx.commit(RESTAURANT_ADD, {
        name: restaurant.name,
        longitude: restaurant.longitude,
        latitude: restaurant.latitude,
        food_type: restaurant.food_type,
        price_rating: restaurant.price_rating,
        vegan_option: restaurant.vegan_option,
        vegetarian_option: restaurant.vegetarian_option,
        short_review: restaurant.short_review,
      });
      ctx.dispatch('getUserInfo');
      return {
        success: true,
        message: 'Successfully added restaurant',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Unable to connect to server',
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

