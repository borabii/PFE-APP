import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import {
  UPDATE_IMAGE,
  SEND_DEMANDEANNONCEUR,
  REMOVE_RSPONSEMESSAGE,
  UPDATE_DESCRIPTION,
  LOAD_ANNONCEUR,
  UPDATE_ANNONCEURPICTURE,
  UPDATE_ANNONCEURINFO,
} from "../types";
import { withSnackbar } from "notistack";
const UserState = (props) => {
  const initialState = {
    responseMessage: "aucune message",
    annonceur: null,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  //update user(abonné) profile image
  const updateProfileImage = async (formData, userId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:8000/api/users/UpadateImageProfile/${userId}`,
        formData,
        config
      );
      dispatch({
        type: UPDATE_IMAGE,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //update user(Anonceur) photo de couverture
  const updateAnnonceurProfileImage = async (formData, annonceurId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:8000/api/users/Annonceur/updateProfileImage/${annonceurId}`,
        formData,
        config
      );
      dispatch({
        type: UPDATE_ANNONCEURPICTURE,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //update user(Anonceur) Info

  const updateAnnonceurInfo = async (formData, annonceurId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:8000/api/users/Annonceur/updatePersonelInfo/${annonceurId}`,
        formData,
        config
      );

      dispatch({
        type: UPDATE_ANNONCEURINFO,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //update user(abonné) description
  const updateDescription = async (updayteddescription, userId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:8000/api/users/upadateDescription/${userId}`,
        updayteddescription,
        config
      );
      dispatch({
        type: UPDATE_DESCRIPTION,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //envoyer demande annonceur par user(abonné) a l'admin
  const sendDemandeAnnonceur = async (formData, userId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/demandeAnnonceur/${userId}`,
        formData,
        config
      );
      dispatch({
        type: SEND_DEMANDEANNONCEUR,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //clear global state that handel response message
  const ClearResponseMessage = () => dispatch({ type: REMOVE_RSPONSEMESSAGE });
  //load annonceur data
  const loadAnnonceur = async (userId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/getAnnonceurData/${userId}`,
        config
      );

      dispatch({
        type: LOAD_ANNONCEUR,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider
      value={{
        userProfileImage: state.userProfileImage,
        responseMessage: state.responseMessage,
        annonceur: state.annonceur,
        updateProfileImage,
        sendDemandeAnnonceur,
        ClearResponseMessage,
        updateDescription,
        loadAnnonceur,
        updateAnnonceurProfileImage,
        updateAnnonceurInfo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default withSnackbar(UserState);
