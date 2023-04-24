import axios from "axios"
import { element } from "prop-types"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authApi } from "../api"

import { auth } from "../_actions/user_action"

export default function (
  SpecificComponent: any,
  option: boolean,
  adminRouter: boolean
) {
  function AuthenticationCheck() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(auth()).then((res: any) => {
        if (res?.payload?.data?.code !== 1) {
          if (option) {
            navigate("/")
          }
        } else {
          authApi()
          if (
            adminRouter &&
            !(
              res?.payload?.data?.result?.role === "ROLE_ADMIN" ||
              res?.payload?.data?.result?.role === "ROLE_MANAGER"
            )
          ) {
            navigate("/home")
            //어드민이 아닐 때
          }

          //로그인한 상태
        }
      })
    }, [])
    return <SpecificComponent />
  }

  return AuthenticationCheck
}
