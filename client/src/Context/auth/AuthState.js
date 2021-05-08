import React, { useReducer, useEffect } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utilis/setAuthToken";

import { LOGIN_SUCCESS, USER_LOADED, REGISTER_SUCCESS, LOGOUT } from "../types";
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: { isAnnonceur: " " },
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const loadUser = async () => {
    // to load token into global headers
    // if localStorage.token exists
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token")); //  axios.defaults.headers.common['x-auth-token'] = token;
    }

    // to get user object { id, name, email, type, phone }
    try {
      const res = await axios.get("http://localhost:8000/api/auth");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //login User
  const login = async (formData) => {
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
    } catch (err) {
      console.log(err);
    }
  };

  //signUp for user(abonné)
  const signUp = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/signup",
        formData,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
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
        loadUser,
        login,
        signUp,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
