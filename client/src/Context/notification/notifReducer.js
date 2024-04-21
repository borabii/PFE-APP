import { GET_NOTIFICATION, CLEAR_NOTIFICATION } from "../types";
export default (state, action) => {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        notification: action.payload,
      };
    case CLEAR_NOTIFICATION:
      return {
        notification: null,
      };
    default:
      return state;
  }
};
