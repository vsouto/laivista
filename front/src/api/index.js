/* eslint-disable no-console */
import axios from "axios"
import { throttleAdapterEnhancer } from "axios-extensions"

const axiosInstance = axios.create({
  timeout: 30 * 1000,
  adapter: throttleAdapterEnhancer(axios.defaults.adapter, { threshold: 3 * 1000 })
})

export default axiosInstance
