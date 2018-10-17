import { TEST_OBJECTS } from '@/store/mutationTypes';

import HTTP from '@/utils/http';


interface State {
  testObjects: object[];
}

const state: State = {
  testObjects: [],
};

const getters = {
  getTestObjects: (storeState: State) => storeState.testObjects,
};

const actions = {
  async getTests(ctx: any) {
    try {
      const response = await HTTP.get('test/');
      if (response.data && response.data.results instanceof Array) {
        const testObjects = response.data.results.map((tests: object[]) => {
          return {...tests};
        });
        ctx.commit(TEST_OBJECTS, testObjects);
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
  [TEST_OBJECTS](storeState: State, payload: object[]) {
    storeState.testObjects = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

