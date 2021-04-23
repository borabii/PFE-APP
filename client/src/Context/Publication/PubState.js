import React, { useReducer } from "react";
import axios from "axios";
import PubContext from "./pubContext";
import pubReducer from "./pubReducer";
import setAuthToken from "../../utilis/setAuthToken";
import { GET_ACTIVITY, ADD_ACTIVITY } from "../types";
const PubState = (props) => {
  const initialState = {
    pubs: null,
  };
  const [state, dispatch] = useReducer(pubReducer, initialState);

  //get act
  const loadAct = async () => {
    // to load token into global headers
    // if localStorage.token exists
    if (localStorage.token) {
      setAuthToken(localStorage.token); //  axios.defaults.headers.common['x-auth-token'] = token;
    }
    try {
      const response = await axios.get(
        `http://localhost:8000/api/Publication/getAct`
      );
      dispatch({
        type: GET_ACTIVITY,
        payload: response.data,
      });
    } catch (err) {}
  };
  // add Activity
  const addAct = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:8000/api/Publication/addActivity`,
        formData,
        config
      );
      dispatch({
        type: ADD_ACTIVITY,
        payload: res.data,
      });
    } catch (err) {}
  };
  return (
    <PubContext.Provider
      value={{
        pubs: state.pubs,
        loadAct,
        addAct,
      }}
    >
      {props.children}
    </PubContext.Provider>
  );
};
export default PubState;
