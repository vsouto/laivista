import * as mutations from "./mutations"
import * as actions from "./actions"
import * as getters from "./getters"

const state = {
  storeModuleDirectory: "account",
  accessToken: null,

  user: {},
  permissions: "",
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
