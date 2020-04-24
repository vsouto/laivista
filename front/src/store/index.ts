import Vue from 'vue';
import Vuex from 'vuex';

import account from "@/store/modules/account"
import live from "@/store/modules/live"
import artist from "@/store/modules/artist"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    account,
    live,
    artist
  },
});
