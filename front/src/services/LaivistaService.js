import http from "@/api"
import { LIVES, USERS, ARTISTS } from "@/api/routes"

export default {
  /**
   * LIVES
   */
  getLives() {
    return http.get(LIVES.LIVES)
  },
  getLive(id) {
    return http.get(LIVES.LIVE(id))
  },

  createLive(live) {
    return http.post(LIVES.LIVES, live.dump())
  },

  /**
   * USERS
   */
  getUsers() {
    return http.get(USERS.USERS)
  },
  getUser(id) {
    return http.get(USERS.USER(id))
  },

  /**
   * ARTISTS
   */
  getArtists() {
    return http.get(ARTISTS.ARTISTS)
  },
  getArtist(id) {
    return http.get(ARTISTS.ARTIST(id))
  },
}
