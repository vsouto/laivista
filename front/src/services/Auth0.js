import auth0 from "auth0-js"
import { auth0 as authConfig } from "@/config"

export const webAuth = new auth0.WebAuth(authConfig)

export const authorize = (payload) => {
  return webAuth.authorize(payload)
}

export const logout = (payload) => {
  return webAuth.logout(payload)
}

export const checkSession = () => {
  return new Promise((resolve) => {
    webAuth.checkSession({}, function(err, result) {
      if (err)
        return null
      resolve(result)
    })
  })
}

export const parseHash = () => {
  return new Promise((resolve, reject) => {
    webAuth.parseHash({
      state: authConfig.state
    }, (err, authResult) => {
      if (err) {
        reject(err)
      } else {
        webAuth.client.userInfo(authResult.accessToken, function(err, user) {
          if (err) {
            reject(err)
          } else {
            authResult.user = user
            resolve(authResult)
          }
        })
      }
    })
  })
}
