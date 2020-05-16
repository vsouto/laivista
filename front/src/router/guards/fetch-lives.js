import store from "@/store"

export const fetchLives = (to, from, next) => {
  store.dispatch("live/fetchLives")
    .then(() => {
      next()
    })
}
