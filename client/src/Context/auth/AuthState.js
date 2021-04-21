import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utilis/setAuthToken";

import { LOGIN_SUCCESS, USER_LOADED, LOGOUT } from "../types";
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    userRole: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User data after signin
  const loadUser = async () => {
    // to load token into global headers
    // if localStorage.token exists
    if (localStorage.token) {
      setAuthToken(localStorage.token); //  axios.defaults.headers.common['x-auth-token'] = token;
    }

    try {
      const response = await axios.get("http://localhost:8000/api/auth/getAll");
      console.log(
        "%c res.data ( loadUser() in AuthState.js )",
        "color:orange; font-weight:bold;"
      );
      console.log(response.data);

      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //login User
  const login = async (formData) => {
    //formData = data to register the user
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signin",
        formData,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      loadUser(); //set token and request to backend /api/auth
    } catch (err) {
      console.log(err);
    }
  };
  // Logout
  const logout = () => dispatch({ type: LOGOUT });
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        userRole: state.userRole,
        login,
        loadUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
