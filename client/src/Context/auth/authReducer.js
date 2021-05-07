import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from "../types";
export default (state, action) => {
  switch (action.type) {
    case LOGOUT:
      // remove the token from storage
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        abonné: null,
      };

    case REGISTER_SUCCESS:

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};
