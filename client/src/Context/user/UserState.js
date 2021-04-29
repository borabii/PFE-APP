import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import { UPDATE_IMAGE } from "../types";

const UserState = (props) => {
  const initialState = {
    userProfileImage: null,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  //update user(abonné) profile image
  const updateProfileImage = async (UserImage, userId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.put(
        `http://localhost:8000/api/users/UpadateImageProfile/${userId}`,
        UserImage,
        config
      );
      dispatch({
        type: UPDATE_IMAGE,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userProfileImage: state.userProfileImage,
        updateProfileImage,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
