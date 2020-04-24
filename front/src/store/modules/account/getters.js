import PERMISSIONS from "@/constants/permissions"
import Vue from "vue"

/* User Account */

export const user = (state) => {
  let user = state.user
  if (Vue.mocksActive) {
    /*user = Vue.makeMock(state.storeModuleDirectory, "accounts") || state.user
    console.log('accounts mocks are', user); // eslint-disable-line*/

    user = Vue.getMock(state.storeModuleDirectory, "user") || state.user
  }
  return user
}

export const userMetaData = (state) => {
  return user(state).user_metadata
}

export const userId = (state) => {
  return user(state).sub
}

export const userEmail = (state) => {
  return user(state).email
}

export const appMetaData = (state) => {
  return user(state).app_metadata
}

export const userPicture = (state) => {
  return user(state).picture || "/img/default-avatar.png"
}

export const userName = (state) => {
  let userObj = user(state)
  return userObj.name || userObj.user_metadata && userObj.user_metadata.firstname || userObj.email
}


/* Authorization */

export const token = state => state.accessToken

export const isAuthenticated = (state) => {
  return state.expiresAt != 0
}
