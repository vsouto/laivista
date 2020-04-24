import * as mutations from "./mutations"
import * as actions from "./actions"
import * as getters from "./getters"

const state = {
  storeModuleDirectory: "account",
  accessToken: null,

  configured_accounts: [],

  expiresAt: 0,
  refreshTokenRetries: 0,
  user: {},
  permissions: "",
  redirectPath: "/",

  // TODO: fetch from API
  // TODO: make it userMetadata so user can change it (use custom conversion)
  currencyRates: {
    BRLxUSD: 0.25,
    USDxBRL: 4
  },
  // TODO: make it userMetadata so user can change it (use custom conversion)
  frontendCurrency: "BRL"
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
