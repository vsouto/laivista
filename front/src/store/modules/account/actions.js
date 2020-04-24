
import { auth0 as auth0Config } from "@/config"
import * as AccountService from "@/services/AccountService"
import * as auth0 from "@/services/Auth0"

export const register = () => {
  auth0.authorize({
    "initialScreen": "signUp"
  })
}

export const login = ({ commit }, redirectPath="/") => {
  commit("SET_REDIRECT_PATH", redirectPath)
  auth0.authorize({
    audience: "api.painel.com.br"
  })
}

export const logout = () => {
  window.localStorage.clear()
  auth0.logout({
    returnTo: auth0Config.returnTo
  })
}

export const fetchUser = ({
  commit, dispatch, rootState
}) => {
  const fetchAttr = "user"
  if (!rootState.fetch_control[fetchAttr]) {
    commit("SET_FETCHING", fetchAttr, { root: true })
    return AccountService.getUser()
      .then(res => {
        commit("setUser", res.data)
        commit("SET_FETCHED", fetchAttr, { root: true })
      })
      .catch((error) => {
        dispatch("error", { fetchAttr, error }, {
          root: true
        })
      })
  }
}


/**
 * Updates user infos in Auth0
 *
 * @param undefined
 * @param app_metadata
 * @returns {Promise<boolean>}
 */
export const updateUser = (undefined, app_metadata ) => {

  return ReaperService.updateUser(app_metadata)
    .then(() => {
      return true
    })
}

/**
 * update user_metadata fields on Auth0
 *
 * @param commit
 * @param fields
 * @returns {Promise<boolean>}
 */
export const updateUsermetadata = ({commit}, fields ) => {

  return ReaperService.updateUsermetadata(fields)
    .then(() => {
      commit("setUserNames", fields)
      return true
    })
}

/**
 * loginService fires a request to Reaper Middleware
 *
 * @param commit
 * @param state
 * @param email
 * @returns {*}
 */
export const loginService = ({
  commit
}, email) => {

  return ReaperService.loginService(email)
    .then(res => {

      if (res.data && res.data.deal)
        commit("setPlan", res.data.deal)
    })
}

/**
 * Get Plans from Pipedrive
 *
 * @param commit
 * @param state
 * @returns {*}
 */
export const getPlans = ({
  commit
}) => {

  return ReaperService.getProducts()
    .then(res => {

      if (res.data && res.data.data)
        commit("SET_USER_PLANS", res.data.data)
    })
}

/***
 * User changes its own password on Auth0
 *
 * @param undefined
 * @param password
 * @returns {Promise<boolean>}
 */
export const changePassword = (undefined, password) => {

  return ReaperService.changePassword(password)
    .then(() => {
      return true
    })
}

export const handleAuthentication = ({
  commit,
  dispatch
}) => {
  return auth0.parseHash().then(authResult => {
    const idTokenExpires = authResult.idTokenPayload && authResult.idTokenPayload.exp
    const expiresAt = idTokenExpires && idTokenExpires * 1000 || authResult.expiresIn && authResult.expiresIn * 1000 + Date.now() || Date.now() + 3600
    const accessToken = authResult.accessToken
    const user = authResult.user

    user.app_metadata = user[`https://${auth0Config.domain}/app_metadata`] || {}
    const permissions = authResult.scope
    delete user[`https://${auth0Config.domain}/app_metadata`]

    user.user_metadata = user[`https://${auth0Config.domain}/user_metadata`] || {}
    delete user[`https://${auth0Config.domain}/user_metadata`]

    user.created_at = user[`https://${auth0Config.domain}/created_at`]

    user.firstname = user.user_metadata.firstname || user.given_name || user.email
    user.lastname = user.user_metadata.lastname || user.family_name || ""
    user.phone = user.user_metadata.phone

    const plan = user.app_metadata.plan

    // Update user infos and plan through Reaper
    dispatch("loginService", user.email)

    // Also get all user plans from Pipedrive
    dispatch("getPlans")


    commit("setAuthResult", {
      expiresAt,
      accessToken,
      user,
      scope: permissions
    })
    commit("SET_FETCHED", "user", { root: true })
    dispatch("setUserDataLayer")
  }).catch((error) => {

    return dispatch("logout")
  })
}

export const refreshExpiredToken = ({
  commit, state, dispatch
}) => {
  commit("refreshTokenRetry")
  if (state.refreshTokenRetries > 1) {
    dispatch("logout")
    return
  }
  auth0.checkSession().then((result) => {
    if (result) {
      const token = result.accessToken
      if (token) {
        commit("refreshToken", result)
        return token
      }
    }
    return null
  })
}


export const setUserDataLayer = ({
  getters
}) => {
  let user = getters["user"]
  if (user && user.email) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      "event": "userLoaded",
      "userCreatedAt": user.created_at,
      "userFirstname": user.firstname,
      "userLastname": user.lastname,
      "userEmail": user.email,
      "userId": user.sub
    })
  }
}

