import { AUTH_USER, LOGIN_USER } from "../_actions/types";

export default function (state = {}, action: any) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case AUTH_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
}
