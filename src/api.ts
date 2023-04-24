import axios from "axios"
import { useSelector } from "react-redux"

export const authApi = () => {
  const token = () => {
    if (localStorage.getItem("authorization")) {
      return localStorage.getItem("authorization")
    } else {
      return "Bearer"
    }
  }

  const Api = axios.create({
    baseURL: `http://192.168.0.233:6112/`,
    headers: { authorization: `${token()}` },
  })
  Api.defaults.withCredentials = true

  return Api
}

export const Api = axios.create({
  baseURL: `http://192.168.0.233:6112/`,
  headers: { authorization: `` },
})
Api.defaults.withCredentials = true
export const fileUploadApi = axios.create({
  baseURL: `http://192.168.0.233:6112/`,
})

export const loginApi = axios.create({
  baseURL: `http://192.168.0.233:6112/`,
})

loginApi.defaults.withCredentials = true
fileUploadApi.defaults.withCredentials = true
fileUploadApi.defaults.headers.post["Content-Type"] = "multipart/form-data"

Api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("authorization")
  config.headers.authorization = token
  return config
})

Api.interceptors.response.use((config) => {
  const token: any = config.headers.authorization
  localStorage.setItem("authorization", token)
  return config
})
