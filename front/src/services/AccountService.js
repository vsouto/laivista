import api from "@/api"
import { ACCOUNT } from "@/api/routes"

export const getUser = () =>  {
  return api.get(ACCOUNT.USER)
}

export const updateUser = user => {
  return api.patch(ACCOUNT.USER, user)
}

export const getAssets = () => {
  return api.get(ACCOUNT.ASSETS)
}
