import React, { useReducer } from "react";
import axios from "axios";
import NotifContext from "./notifContext";
import notifReducer from "./notifReducer";
import { GET_NOTIFICATION, CLEAR_NOTIFICATION } from "../types";
const NotifState = (props) => {
  //global state
  const initialState = {
    notification: null,
  };
  const [state, dispatch] = useReducer(notifReducer, initialState);

  /***************************************************************** */
  /*************************Global method************************** */
  /*************************************************************** */
  //get user notif
  const getNotif = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/Notification/getNotification`
      );
      dispatch({
        type: GET_NOTIFICATION,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //get user notification globa state
  const clearNotification = () => {
    dispatch({
      type: CLEAR_NOTIFICATION,
    });
  };
  return (
    <NotifContext.Provider
      value={{ notification: state.notification, getNotif, clearNotification }}
    >
      {props.children}
    </NotifContext.Provider>
  );
};
export default NotifState;
