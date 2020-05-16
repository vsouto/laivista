import store from "@/store"

export const fetchArtists = (to, from, next) => {
  store.dispatch("artist/fetchArtists")
    .then(() => {
      next()
    })
}
