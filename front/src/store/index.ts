import Vue from 'vue';
import Vuex from 'vuex';

import live from "@/store/modules/live"
import artist from "@/store/modules/artist"

/*
import account from "@/store/modules/account"
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
    live,
    artist
  },
});
