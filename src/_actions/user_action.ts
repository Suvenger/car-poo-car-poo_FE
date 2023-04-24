import { authApi, loginApi, Api } from "../api"

import { AUTH_USER, LOGIN_USER } from "./types"

export const loginUser: any = ({ dataToSubmit }: any) => {
  const request = loginApi.post("/login", dataToSubmit).then((res) => res)
  return {
    type: LOGIN_USER,
    payload: request,
  }
}

export const auth: any = async () => {
  const request = await Api.get(`/api/v1/user/check`, {
    headers: {
      Authorization: `${
        localStorage.getItem("authorization")
          ? localStorage.getItem("authorization")
          : "Bearer"
      }`,
    },
  })
    .then((res: any) => {
      return res
    })
    .catch((err) => console.log(err))
  return {
    type: AUTH_USER,
    payload: request,
  }
}
