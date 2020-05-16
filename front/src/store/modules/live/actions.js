import LaivistaService from "@/services/LaivistaService"

export const fetchLives = ({
  commit, dispatch, rootState
}) => {

  const fetchAttr = "lives"

  return LaivistaService.getLives()
    .then(res => {

      commit("setLives", res.data)
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

export const createLive = ({
 commit, dispatch
}, live) => {

  const fetchAttr = "lives"

  console.log('creating live ', live); //eslint-disable-line
  return LaivistaService.createLive(live)
    .then(res => {

      //commit("setLives", res.data)
      return res
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

