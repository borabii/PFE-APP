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
  LOAD_CATEGORIE,
  DELETE_CENTREOFINTERET,
  ADD_CENTREOFINTERET,
  UPDATE_DISTANCE_DE_RECHERCHE,
  LOAD_PROFIL_INFO,
  CLEAR_USERLOADED_PROFILEINFO,
  LOAD_ANNONCEUR_PROFIL_INFO,
  CLEAR_ANNONCEUR_LOADED_PROFILEINFO,
  RATE_USER,
  FOLLOW_USER,
  UNFOLLOW_USER,
  FOLLOW_ANNONCEUR,
  UNFOLLOW_ANNONCEUR,
  RATE_ANNONCEUR,
} from "../types";
const UserState = (props) => {
  //global state
  const initialState = {
    responseMessage: "aucune message",
    annonceur: null,
    catégorieOption: null,
    fullCatégorieData: null,
    userCurrentLocation: null,
    visitedProfileInfo: null,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  /***************************************************************** */
  /*************************Global method************************** */
  /*************************************************************** */

  /**********************Abonné method******************* */
  //update user(abonné) description
  const updateDescription = async (updayteddescription) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        "http://localhost:8000/api/users/upadateDescription",
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
  //update user(abonné) distance de recherhce
  const updateDistanceDeRecherhce = async (distance) => {
    try {
      const userDistance = { distance };
      const response = await axios.put(
        "http://localhost:8000/api/users/UpdateDistanceRecherche",
        userDistance
      );
      dispatch({
        type: UPDATE_DISTANCE_DE_RECHERCHE,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //update user(abonné) profile image
  const updateProfileImage = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        "http://localhost:8000/api/users/UpadateImageProfile/",
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
  //envoyer demande annonceur par user(abonné) a l'admin
  const sendDemandeAbonné = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/demandeAnnonceur",
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
  //delete user(abonné) centre of interet
  const deleteCentreOfInteret = async (categorieType) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/Categorie/deleteCategorie/${categorieType}`
      );
      dispatch({
        type: DELETE_CENTREOFINTERET,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //add user(abonné) centre of interet
  const addCentreOfInteret = async (categorieType) => {
    try {
      const response = await axios.put(
        "http://localhost:8000/api/Categorie/addCategorie",
        categorieType
      );
      dispatch({
        type: ADD_CENTREOFINTERET,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //load user(abonné) profile info
  const loadUserProfileInfo = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/loadUser/${userId}`
      );
      dispatch({
        type: LOAD_PROFIL_INFO,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // Clear loaded user(abonné) profile info
  const clearAbonnéUserProfileInfo = () => {
    dispatch({
      type: CLEAR_USERLOADED_PROFILEINFO,
    });
  };
  //load user(Annonceur) profile info
  const loadAnnonceurProfileInfo = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/loadAnnonceur/${userId}`
      );
      dispatch({
        type: LOAD_ANNONCEUR_PROFIL_INFO,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // Clear loaded user(Annonceur) profile info
  const clearAnnonceurProfileInfo = () => {
    dispatch({
      type: CLEAR_ANNONCEUR_LOADED_PROFILEINFO,
    });
  };
  //rate abonné
  const rateUser = async (avis, userId) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/rating/${userId}`,
        avis
      );
      dispatch({
        type: RATE_USER,
        payload: response,
      });
      loadUserProfileInfo(userId);
    } catch (err) {
      console.log(err);
    }
  };
  //rate annonceur
  const rateAnnonceur = async (avis, userId) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/ratingAnnonceur/${userId}`,
        avis
      );
      dispatch({ type: RATE_ANNONCEUR, payload: response });
      loadAnnonceurProfileInfo(userId);
    } catch (err) {
      console.log(err);
    }
  };
  //follow user(abonné)
  const followUser = async (userId) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/follow/${userId}`
      );
      dispatch({
        type: FOLLOW_USER,
        payload: response,
      });
      loadUserProfileInfo(userId);
    } catch (err) {
      console.log(err);
    }
  };
  //unfollow user(abonné)
  const unFollowUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/users/unfollow/${userId}`
      );
      dispatch({
        type: UNFOLLOW_USER,
        payload: response,
      });
      loadUserProfileInfo(userId);
    } catch (err) {
      console.log(err);
    }
  };
  //follow user(annonceur)
  const followAnnonceur = async (userId) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/followAnnonceur/${userId}`
      );
      dispatch({
        type: FOLLOW_ANNONCEUR,
        payload: response,
      });
      loadAnnonceurProfileInfo(userId);
    } catch (err) {
      console.log(err);
    }
  };
  //unfollow user(annonceur)
  const unFollowAnnonceur = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/users/unfollowAnnonceur/${userId}`
      );
      dispatch({
        type: UNFOLLOW_ANNONCEUR,
        payload: response,
      });
      loadAnnonceurProfileInfo(userId);
    } catch (err) {
      console.log(err);
    }
  };
  /**********************Annonceur method******************* */
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
  //load annonceur data
  const loadAnnonceur = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.get(
        "http://localhost:8000/api/users/getAnnonceurData",
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

  //clear global state that handel response message
  const ClearResponseMessage = () => dispatch({ type: REMOVE_RSPONSEMESSAGE });

  /************************************************************* */
  /*************************Catégorie************************** */
  /*********************************************************** */
  //load catégorie all data
  const getCatégorie = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/Categorie/getListcategories"
      );
      dispatch({
        type: LOAD_CATEGORIE,
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        responseMessage: state.responseMessage,
        annonceur: state.annonceur,
        catégorieOption: state.catégorieOption,
        fullCatégorieData: state.fullCatégorieData,
        userCurrentLocation: state.userCurrentLocation,
        visitedProfileInfo: state.visitedProfileInfo,
        updateProfileImage,
        updateDistanceDeRecherhce,
        sendDemandeAbonné,
        ClearResponseMessage,
        updateDescription,
        loadAnnonceur,
        updateAnnonceurProfileImage,
        updateAnnonceurInfo,
        getCatégorie,
        addCentreOfInteret,
        deleteCentreOfInteret,
        loadUserProfileInfo,
        clearAbonnéUserProfileInfo,
        loadAnnonceurProfileInfo,
        clearAnnonceurProfileInfo,
        rateUser,
        rateAnnonceur,
        followUser,
        unFollowUser,
        followAnnonceur,
        unFollowAnnonceur,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
