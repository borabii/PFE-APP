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
