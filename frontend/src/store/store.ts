import Vue from 'vue';
import Vuex from 'vuex';

import restaurants from './modules/restaurants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  modules: {
    restaurants,
  },
});
