import HTTP from '@/utils/http';


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
//  restaurants: object[];
}

const state: State = {
  restaurantId: null,
  name: "",
  longitude: 0,
  latitude: 0,
  foodType: "",
  priceRating: 0,
  veganOption: false,
  vegetarianOption: false,
  shortReview: "",
//  restaurants: [],
};


const actions = {
  async addRestaurant(ctx: any, credentials: any) {
    try {
      const response = await HTTP.post('v1/restaurants', credentials);
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

const mutations = {

};

export default {
  state,
  actions,
  mutations,
};

