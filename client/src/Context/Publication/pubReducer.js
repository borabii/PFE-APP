import {
  GET_ACTIVITYORGANIZED,
  ADD_ACTIVITY,
  EDIT_PUB,
  DELETE_PUBLICATION,
  REMOVE_PUBRSPONSEMESSAGE,
  GET_ACTIVITYPARTICIPATED,
  ADD_EVENT,
  ADD_ANNONCE,
  GET_ANNONCEURANNONCE,
  GET_ANNONCEUREVENT,
  GET_PARTICIPANTDATA,
  REMOVE_PARTICIPANTDATA,
  CLEAR_ANNONCEURPUBS,
  CLEAR_ABONNÉPUB,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case GET_ACTIVITYORGANIZED:
      return {
        ...state,
        pubsOrganized: action.payload,
        loading: false,
      };
    case GET_ACTIVITYPARTICIPATED:
      return {
        ...state,
        pubsParticipated: action.payload,
        loading: false,
      };
    case EDIT_PUB:
      if (action.payload.pub.typePub === "Event") {
        return {
          ...state,
          // event._id === action.payload.pub._id ? If true -> return action.payload.pub {pub Object} | if not -> return event
          // for Updating only for 1 event, the rest will be the same and must be returned on state.anonceurEvent
          anonceurEvent: state.anonceurEvent.map((event) =>
            event._id === action.payload.pub._id ? action.payload.pub : event
          ),
          loading: false,
          pubResponseMsg: action.payload.msg,
        };
      } else if (action.payload.pub.typePub === "Activity") {
        return {
          ...state,
          // activity._id === action.payload.pub._id ? If true -> return action.payload.pub {pub Object} | if not -> return activity
          // for Updating only for 1 activity, the rest will be the same and must be returned on state.pubsOrganized
          pubsOrganized: state.pubsOrganized.map((activity) =>
            activity._id === action.payload.pub._id
              ? action.payload.pub
              : activity
          ),
          loading: false,
          pubResponseMsg: action.payload.msg,
        };
      } else {
        return {
          ...state,
          // annonce._id === action.payload.pub._id ? If true -> return action.payload.pub {pub Object} | if not -> return annonce
          // for Updating only for 1 annonce, the rest will be the same and must be returned on state.annonceurAnnonce
          annonceurAnnonce: state.annonceurAnnonce.map((annonce) =>
            annonce._id === action.payload.pub._id
              ? action.payload.pub
              : annonce
          ),
          loading: false,
          pubResponseMsg: action.payload.msg,
        };
      }
    case DELETE_PUBLICATION:
      if (action.payload.typePub.typePub === "Event") {
        return {
          ...state,
          anonceurEvent: state.anonceurEvent.filter(
            (event) => event._id !== action.payload.typePub._id
          ), //action.payload = _id that we want to delete
          loading: false,
          pubResponseMsg: action.payload.msg,
        };
      } else if (action.payload.typePub.typePub === "Activity") {
        return {
          ...state,
          pubsOrganized: state.pubsOrganized.filter(
            (act) => act._id !== action.payload.typePub._id
          ), //action.payload = _id that we want to delete
          loading: false,
          pubResponseMsg: action.payload.msg,
        };
      } else {
        return {
          ...state,
          annonceurAnnonce: state.annonceurAnnonce.filter(
            (annonce) => annonce._id !== action.payload.typePub._id
          ), //action.payload = _id that we want to delete
          loading: false,
          pubResponseMsg: action.payload.msg,
        };
      }

    case ADD_EVENT:
      return {
        ...state,
        pubResponseMsg: action.payload.msg,
        anonceurEvent: [action.payload.event, ...state.anonceurEvent],
      };
    case ADD_ANNONCE:
      return {
        ...state,
        pubResponseMsg: action.payload.msg,
        annonceurAnnonce: [action.payload.annonce, ...state.annonceurAnnonce],
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        pubResponseMsg: action.payload.msg,
      };
    case REMOVE_PUBRSPONSEMESSAGE:
      return {
        ...state,
        pubResponseMsg: "aucune message",
      };
    case GET_ANNONCEURANNONCE:
      return {
        ...state,
        annonceurAnnonce: action.payload,
        loading: false,
      };
    case GET_ANNONCEUREVENT:
      return {
        ...state,
        anonceurEvent: action.payload,
        loading: false,
      };
    case GET_PARTICIPANTDATA:
      return {
        ...state,
        participantData: action.payload,
        loading: false,
      };
    case REMOVE_PARTICIPANTDATA:
      return {
        ...state,
        participantData: null,
      };
    case CLEAR_ANNONCEURPUBS:
      return {
        ...state,
        anonceurEvent: null,
        annonceurAnnonce: null,
      };
    case CLEAR_ABONNÉPUB:
      return {
        ...state,
        pubsOrganized: null,
        pubsParticipated: null,
      };
    default:
      return state;
  }
};
