import { LOGIN_SUCCESS, USER_LOADED, LOGOUT } from "../types";
export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      // remove the token from storage
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        userRole: action.payload.role,
      };
    default:
      return state;
  }
};
