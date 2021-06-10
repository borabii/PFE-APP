import React, { useReducer } from "react";
import axios from "axios";
import PubContext from "./pubContext";
import pubReducer from "./pubReducer";
import {
  GET_ACTIVITYORGANIZED,
  ADD_ACTIVITY,
  ADD_ANNONCE,
  EDIT_PUB,
  DELETE_PUBLICATION,
  REMOVE_PUBRSPONSEMESSAGE,
  GET_ACTIVITYPARTICIPATED,
  ADD_EVENT,
  GET_ANNONCEURANNONCE,
  GET_ANNONCEUREVENT,
  GET_PARTICIPANTDATA,
  REMOVE_PARTICIPANTDATA,
  CLEAR_ANNONCEURPUBS,
  CLEAR_ABONNÉPUB,
  GET_PUBSFORHOMEPAGE,
  ACCEPT_PARTICIPANT,
  REFUSE_PARTICIPANT,
  ACCEPTED_PARTICIPANT_DATA,
  REMOVE_ACCEPTED_PARTICIPANTDATA,
} from "../types";
const PubState = (props) => {
  const initialState = {
    annonceurAnnonce: null,
    anonceurEvent: null,
    pubsOrganized: null,
    pubsParticipated: null,
    pubs: null,

    participantData: null,
    acceptedParticipantData: null,
    pubResponseMsg: "aucune message",
  };

  const [state, dispatch] = useReducer(pubReducer, initialState);

  //get activity organized
  const loadActOrganized = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/Publication/getActOrganized`
      );
      dispatch({
        type: GET_ACTIVITYORGANIZED,
        payload: response.data,
      });
    } catch (err) {}
  };
  //load activity participated
  const loadActParticipated = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/Publication/getActParticipated`
      );
      dispatch({
        type: GET_ACTIVITYPARTICIPATED,
        payload: response.data,
      });
    } catch (err) {}
  };
  //load pubs(annonce,event,act) for user home page
  const loadPubs = async (lat, lon, radius) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/Publication/homaPagePub/${lat}/${lon}/${radius}`
      );
      dispatch({
        type: GET_PUBSFORHOMEPAGE,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //load posted  annonceur event
  const loadEvent = async (annonceurId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/Publication/getAnnonceurEvent/${annonceurId}`
      );
      dispatch({
        type: GET_ANNONCEUREVENT,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //load posted  annonceur Annonce
  const loadAnnonce = async (annonceurId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/Publication/getAnnonceurAnnonce/${annonceurId}`
      );
      dispatch({
        type: GET_ANNONCEURANNONCE,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // add Activity
  const addAct = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:8000/api/Publication/addActivity`,
        formData,
        config
      );
      dispatch({
        type: ADD_ACTIVITY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //edit Pub(Annonce,event,act)
  const editPub = async (formData, pubId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(
        `http://localhost:8000/api/Publication/updatePublication/${pubId}`,
        formData,
        config
      );
      dispatch({
        type: EDIT_PUB,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //delete publication(annonce,activité,event)
  const deletePub = async (pubId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/Publication/deletepub/${pubId}`
      );
      dispatch({
        type: DELETE_PUBLICATION,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // add Event
  const addEvent = async (formData, annonceurId) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/Publication/addEvent/${annonceurId}`,
        formData
      );
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // add  Annonce
  const addAnnonce = async (formData, annonceurId) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/Publication/addAnnonce/${annonceurId}`,
        formData
      );
      dispatch({
        type: ADD_ANNONCE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //Accepte participant
  const acceptParticipant = async (pubId, participantId) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/Publication/AccepteParticipant/${pubId}/${participantId}`
      );

      dispatch({
        type: ACCEPT_PARTICIPANT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //refuse participant
  const refuseParticipant = async (pubId, participantId) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/Publication/refuseParticipant/${pubId}/${participantId}`
      );

      dispatch({
        type: REFUSE_PARTICIPANT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //get ALL participant data in pub
  const getParticipantData = async (pubId) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/Publication/getParticipantData/${pubId}`
      );
      dispatch({
        type: GET_PARTICIPANTDATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //get ONLY accepted participant data in pub
  const getAcceptedParticipantData = async (pubId) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/Publication/HomePagePubs/getAcceptedParticipantData/${pubId}`
      );
      dispatch({
        type: ACCEPTED_PARTICIPANT_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //clear global state that handel response message
  const ClearPubResponseMsg = () =>
    dispatch({ type: REMOVE_PUBRSPONSEMESSAGE });
  //clear global state (participantData)
  const ClearParticipantData = () => dispatch({ type: REMOVE_PARTICIPANTDATA });
  const ClearAcceptedParticipantData = () =>
    dispatch({ type: REMOVE_ACCEPTED_PARTICIPANTDATA });

  // Clear Annonceur pub(annonce(annonceurAnnonce ) and (event(anonceurEvent)))
  const clearAnnonceurPub = () => {
    dispatch({
      type: CLEAR_ANNONCEURPUBS,
    });
  };
  // Clear Abonné pub(Activity(annonceurAnnonce ) and (event(anonceurEvent)))
  const clearAbonnéPub = () => {
    dispatch({
      type: CLEAR_ABONNÉPUB,
    });
  };
  return (
    <PubContext.Provider
      value={{
        pubs: state.pubs,
        pubsOrganized: state.pubsOrganized,
        pubsParticipated: state.pubsParticipated,
        pubResponseMsg: state.pubResponseMsg,
        annonceurAnnonce: state.annonceurAnnonce,
        anonceurEvent: state.anonceurEvent,
        participantData: state.participantData,
        acceptedParticipantData: state.acceptedParticipantData,
        loadActOrganized,
        loadPubs,
        addAct,
        editPub,
        ClearPubResponseMsg,
        loadActParticipated,
        addEvent,
        deletePub,
        loadEvent,
        loadAnnonce,
        getParticipantData,
        ClearParticipantData,
        clearAnnonceurPub,
        clearAbonnéPub,
        addAnnonce,
        acceptParticipant,
        refuseParticipant,
        getAcceptedParticipantData,
        ClearAcceptedParticipantData,
      }}
    >
      {props.children}
    </PubContext.Provider>
  );
};
export default PubState;
