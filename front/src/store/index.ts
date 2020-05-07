import Vue from 'vue';
import Vuex from 'vuex';

import lives from "@/store/modules/live"

/*
import account from "@/store/modules/account"
import artist from "@/store/modules/artist"
*/

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    lives
  },
});
