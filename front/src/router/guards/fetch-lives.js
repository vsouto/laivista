import store from "@/store"

export const fetchLives = (to, from, next) => {
  store.dispatch("lives/fetchLives")
    .then(() => {
      next()
    })
}
