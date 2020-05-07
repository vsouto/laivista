const apiPath = process.env.VUE_APP_API_HOSTNAME

// Lives
const liveBasePath = apiPath + "/live"
export const LIVES = {
  LIVES: liveBasePath,
  LIVE: (id) => `${liveBasePath}/${id}`,
}

// Users
const userBasePath = apiPath + "/user"
export const USERS = {
  USERS: userBasePath,
  LIVE: (id) => `${userBasePath}/${id}`,
}

// Artists
const artistBasePath = apiPath + "/artist"
export const ARTISTS = {
  ARTISTS: artistBasePath,
  ARTIST: (id) => `${artistBasePath}/${id}`,
}

