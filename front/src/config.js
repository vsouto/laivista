export default {
  colors: {
    default: "#344675",
    primary: "#42b883",
    info: "#1d8cf8",
    danger: "#fd5d93",
    orange: "#ff8a76",
    teal: "#00d6b4",
    grayOpacity: "rgba(222,222,222, .3)",
    primaryGradient: [ "rgba(76, 211, 150, 0.1)", "rgba(53, 183, 125, 0)", "rgba(119,52,169,0)" ],
    purpleGradient: [ "rgba(253,93,147,0.8)", "rgba(253,93,147,0)" ]
  },
  isDebug: process.env.VUE_APP_DEBUG
}

export const auth0 = {
  clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  redirectUri: `${process.env.VUE_APP_HOSTNAME}/callback`,
  audience: "api.painel.com.br",
  responseType: "token",
  scope: "openid profile email pi:user pi:limited",
  returnTo: process.env.VUE_APP_HOSTNAME + "/login",
  state: "wtf_painel_muthafuckaaaa"
}
