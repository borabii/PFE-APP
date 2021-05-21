import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import MapIcon from "@material-ui/icons/Map";
import PubContext from "../../../Context/Publication/pubContext";

function EditActPopUp(props) {
  //app level state
  const pubContext = useContext(PubContext);
  const { editPub, deletePub } = pubContext;
  const [evenement, setEvenement] = useState({
    description: "",
    adresse: "",
    date_DebutPub: "",
    heure_debutPub: "",
    date_FinPub: "",
    heure_finPub: "",
  });
  const {
    description,
    adresse,
    date_DebutPub,
    heure_debutPub,
    date_FinPub,
    heure_finPub,
  } = evenement;
  const handelChange = (event) => {
    setEvenement({
      ...evenement,
      [event.target.name]: event.target.value,
    });
  };

  const editActivité = () => {
    editPub(evenement, props.actDetail._id);
    setEvenement({
      description: "",
      adresse: "",
      nbr_place: "",
      date_DebutPub: "",
      heure_debutPub: "",
      date_FinPub: "",
      heure_finPub: "",
      tarifEvent: "",
    });
  };

  const deleteActivité = () => {
    deletePub(props.actDetail._id);
  };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modifer Activité
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addActivityPopUp">
          <div className="addAct-form">
            <div className="addAct-principalInfo">
              <h3>information Principale</h3>
              <textarea
                rows="4"
                cols="50"
                placeholder="Description"
                name="description"
                defaultValue={props.actDetail.description}
                onChange={handelChange}
                required
              />
              <div id="ActStart-date">
                <span>Date début</span>
                <input
                  type="date"
                  name="date_DebutPub"
                  defaultValue={
                    props.actDetail.date_DebutPub
                      ? props.actDetail.date_DebutPub.substr(0, 10)
                      : ""
                  }
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_debutPub"
                  defaultValue={props.actDetail.heure_debutPub}
                  onChange={handelChange}
                />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input
                  type="date"
                  name="date_FinPub"
                  defaultValue={
                    props.actDetail.date_FinPub
                      ? props.actDetail.date_FinPub.substr(0, 10)
                      : ""
                  }
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_finPub"
                  defaultValue={props.actDetail.heure_finPub}
                  onChange={handelChange}
                />
              </div>
            </div>

            <h3>Lieu d'événement</h3>
            <div className="addAct-adress">
              <input
                type="text"
                placeholder="Lieu"
                name="adresse"
                defaultValue={props.actDetail.adresse}
                onChange={handelChange}
              />
              <button className="addAct-adressMap" type="submit">
                <MapIcon id="map-Icon" />
              </button>
            </div>

            <div id="editEventAction">
              <div className="edit__action">
                <button id="edit__btn" onClick={editActivité}>
                  Modifier
                </button>
              </div>
              <button id="delete-btn" onClick={deleteActivité}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditActPopUp;
