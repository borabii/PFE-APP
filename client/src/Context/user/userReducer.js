import {
  UPDATE_IMAGE,
  SEND_DEMANDEANNONCEUR,
  REMOVE_RSPONSEMESSAGE,
  UPDATE_DESCRIPTION,
  LOAD_ANNONCEUR,
  UPDATE_ANNONCEURPICTURE,
  UPDATE_ANNONCEURINFO,
  LOAD_CATEGORIE,
  ADD_CENTREOFINTERET,
  DELETE_CENTREOFINTERET,
  UPDATE_DISTANCE_DE_RECHERCHE,
  LOAD_PROFIL_INFO,
  CLEAR_USERLOADED_PROFILEINFO,
  LOAD_ANNONCEUR_PROFIL_INFO,
  CLEAR_ANNONCEUR_LOADED_PROFILEINFO,
  RATE_USER,
  RATE_ANNONCEUR,
  FOLLOW_USER,
  UNFOLLOW_USER,
  FOLLOW_ANNONCEUR,
  UNFOLLOW_ANNONCEUR,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case UPDATE_ANNONCEURINFO:
      return {
        ...state,
        annonceur: action.payload.data.annonceur,
        responseMessage: action.payload.data.msg,
      };
    case UPDATE_ANNONCEURPICTURE:
      return {
        ...state,
        responseMessage: action.payload.data.msg,
        anononceur: (state.annonceur.imageCouverture =
          action.payload.data.image),
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        responseMessage: action.payload.data.msg,
      };
    case LOAD_ANNONCEUR_PROFIL_INFO:
    case LOAD_PROFIL_INFO:
      return {
        ...state,
        loading: false,
        visitedProfileInfo: action.payload.data,
      };
    case CLEAR_ANNONCEUR_LOADED_PROFILEINFO:
    case CLEAR_USERLOADED_PROFILEINFO:
      return {
        ...state,
        visitedProfileInfo: null,
      };
    case FOLLOW_USER:
    case UNFOLLOW_USER:
    case FOLLOW_ANNONCEUR:
    case UNFOLLOW_ANNONCEUR:
    case RATE_USER:
    case RATE_ANNONCEUR:
    case UPDATE_IMAGE:
      return {
        ...state,
        responseMessage: action.payload.data.msg,
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        responseMessage: action.payload.data.msg,
      };
    case SEND_DEMANDEANNONCEUR:
      return {
        responseMessage: action.payload.data,
      };
    case REMOVE_RSPONSEMESSAGE:
      return {
        ...state,
        responseMessage: "aucune message",
      };
    case LOAD_ANNONCEUR:
      return {
        ...state,
        annonceur: action.payload,
        loading: false,
      };
    case LOAD_CATEGORIE:
      return {
        ...state,
        catégorieOption: action.payload.data.catégorieOption,
        fullCatégorieData: action.payload.data.fullCatégorieData,
        loading: false,
      };
    case UPDATE_DISTANCE_DE_RECHERCHE:
    case DELETE_CENTREOFINTERET:
    case ADD_CENTREOFINTERET:
      return {
        ...state,
        responseMessage: action.payload.data.msg,
      };

    default:
      return state;
  }
};
