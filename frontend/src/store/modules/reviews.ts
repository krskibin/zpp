import { REVIEWS_LIST } from '@/store/mutationTypes';

import HTTP from '@/utils/http';


interface State {
  reviews: object[];
}

const state: State = {
  reviews: [],
};

const getters = {
  getReviewList: (storeState: State) => storeState.reviews,
};

const actions = {
  async getReviews(ctx: any) {
    try {
      const response = await HTTP.get('v1/reviews/');
      if (response.data && response.data.results instanceof Array) {
        const reviews = response.data.results.map((reviewList: object[]) => {
          return {...reviewList};
        });
        ctx.commit(REVIEWS_LIST, reviews);
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
  [REVIEWS_LIST](storeState: State, payload: object[]) {
    storeState.reviews = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

