import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      // remove the token from storage
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        loading: false,
        invalidUserInformationMsg: action.payload,
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
        loading: false,
      };

    default:
      return state;
  }
};
