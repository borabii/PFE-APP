import React, { useReducer } from "react";
import axios from "axios";
import pubContext from "./pubContext";
import pubReducer from "./pubReducer";

const PubState = (props) => {
  const initialState = {
    pubs: null,
  };
  const [state, dispatch] = useReducer(pubReducer, initialState);

  return (
    <PubContext.Provider
      value={{
        pubs: state.pubs,
      }}
    >
      {props.children}
    </PubContext.Provider>
  );
};
export default PubState;
