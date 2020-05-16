import LaivistaService from "@/services/LaivistaService"

export const fetchArtists = ({
 commit, dispatch, rootState
}) => {

  const fetchAttr = "artists"

  return LaivistaService.getArtists()
    .then(res => {

      commit("setArtists", res.data)
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}
