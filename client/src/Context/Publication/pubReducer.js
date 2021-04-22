import { GET_ACTIVITY, ADD_ACTIVITY } from "../types";
export default (state, action) => {
  switch (action.type) {
    case GET_ACTIVITY:
      return {
        ...state,
        pubs: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        pubs: [action.payload, ...state.pubs],
      };
  }
};
