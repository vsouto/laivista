import LaivistaService from "@/services/LaivistaService"

export const fetchLives = ({
  commit, dispatch, rootState
}) => {

  const fetchAttr = "lives"

  return LaivistaService.getLives()
    .then(resposta_da_lulu => {

      commit("setLives", resposta_da_lulu.data)
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

/**
 * Updates live infos in Auth0
 *
 * @param undefined
 * @param app_metadata
 * @returns {Promise<boolean>}
 */
export const updateLive = (undefined, app_metadata ) => {

  return ReaperService.updateLive(app_metadata)
    .then(() => {
      return true
    })
}

/**
 * update live_metadata fields on Auth0
 *
 * @param commit
 * @param fields
 * @returns {Promise<boolean>}
 */
export const updateLivemetadata = ({commit}, fields ) => {

  return ReaperService.updateLivemetadata(fields)
    .then(() => {
      commit("setLiveNames", fields)
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
        commit("SET_LIVE_PLANS", res.data.data)
    })
}

/***
 * Live changes its own password on Auth0
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
    const live = authResult.live

    live.app_metadata = live[`https://${auth0Config.domain}/app_metadata`] || {}
    const permissions = authResult.scope
    delete live[`https://${auth0Config.domain}/app_metadata`]

    live.live_metadata = live[`https://${auth0Config.domain}/live_metadata`] || {}
    delete live[`https://${auth0Config.domain}/live_metadata`]

    live.created_at = live[`https://${auth0Config.domain}/created_at`]

    live.firstname = live.live_metadata.firstname || live.given_name || live.email
    live.lastname = live.live_metadata.lastname || live.family_name || ""
    live.phone = live.live_metadata.phone

    const plan = live.app_metadata.plan

    // Update live infos and plan through Reaper
    dispatch("loginService", live.email)

    // Also get all live plans from Pipedrive
    dispatch("getPlans")

    // Giving live context to error tracking
    Sentry.configureScope((scope) => {
      scope.setTag("permissions", permissions)
      if (plan) {
        for (const k in plan)
          scope.setTag(`plan_${k}`, plan[k].toString())
      }
      scope.setLive({
        id: live.sub,
        email: live.email
      })
    })

    commit("setAuthResult", {
      expiresAt,
      accessToken,
      live,
      scope: permissions
    })
    commit("SET_FETCHED", "live", { root: true })
    dispatch("setLiveDataLayer")
  }).catch((error) => {
    Sentry.captureException(error)
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


export const setLiveDataLayer = ({
  getters
}) => {
  let live = getters["live"]
  if (live && live.email) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      "event": "liveLoaded",
      "liveCreatedAt": live.created_at,
      "liveFirstname": live.firstname,
      "liveLastname": live.lastname,
      "liveEmail": live.email,
      "liveId": live.sub
    })
  }
}

