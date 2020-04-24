
/* Authorization */

export const setAuthResult = (state, authResult) => {
  state.expiresAt = authResult.expiresAt
  state.accessToken = authResult.accessToken
  state.user = authResult.user
  state.permissions = authResult.scope
  localStorage.setItem("token", authResult.accessToken)
}

export const setToken = (state, authResult) => {
  state.accessToken = authResult.accessToken
  localStorage.setItem("token", authResult.accessToken)
}

export const refreshToken = (state, refreshResult) => {
  state.accessToken = refreshResult.accessToken
  state.expiresAt = new Date(new Date().getTime() + (refreshResult.expiresIn * 1000))
  localStorage.setItem("token", refreshResult.accessToken)
  state.refreshTokenRetries = 0
}

export const refreshTokenRetry = (state) => {
  state.refreshTokenRetries += 1
}

/* User */

export const setUser = (state, user) => {
  state.user = user
}

export const setPlan = (state, plan) => {
  state.user.plan = plan
}

export const SET_USER_PLANS = (state, plans) => {
  state.plans = plans
}

export const SET_REDIRECT_PATH = (state, redirectPath) => {
  state.redirectPath = redirectPath
}

export const setUserNames = (state, names) => {
  if (!state.user.user_metadata)
    state.user.user_metadata = names
  else {
    state.user.user_metadata.firstname = names.firstname
    state.user.user_metadata.lastname = names.lastname
  }
}
