import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import MapIcon from "@material-ui/icons/Map";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function AddActivityPopUp(props) {
  // this state is use for handle participant counter value
  const [nbrParticipantCounter, setNbrParticipantCounter] = useState(0);
  //this methode is used for increment the state value(nbrParticipantCounter) by 1
  const increment = () => {
    setNbrParticipantCounter(nbrParticipantCounter + 1);
  };
  //this methode is used for decrement the state value(nbrParticipantCounter) by 1
  const decrement = () => {
    if (nbrParticipantCounter < 1) {
      setNbrParticipantCounter(0);
    } else {
      setNbrParticipantCounter(nbrParticipantCounter - 1);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajouter une activité
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addActivityPopUp">
          <form className="addAct-form">
            <div className="addAct-principalInfo">
              <h3>information Principale</h3>
              <textarea rows="4" cols="50" placeholder="Description" />
              <div id="ActStart-date">
                <span>Date début</span>
                <input type="date" />
                <input type="time" />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input type="date" />
                <input type="time" />
              </div>
            </div>
            <div className="addAct-NbrParticipant">
              <div className="nbrParticipant-left">
                <p>Nombre Participant</p>
                <div id="counter-result">
                  <h4>{nbrParticipantCounter}</h4>
                </div>
              </div>

              <div id="nbrParticipant-counter">
                <div id="incrementBtn">
                  <a onClick={increment}>
                    <AddIcon />
                  </a>
                </div>
                <div id="decrementBtn">
                  <a onClick={decrement}>
                    <RemoveIcon />
                  </a>
                </div>
              </div>
            </div>
            <h3>Catégorie</h3>

            <div className="addAct-category">
              <Select
                isMulti
                name="colors"
                options={options}
                className="select"
                classNamePrefix="select"
              />
            </div>
            <h3>Lieu d'activité</h3>
            <div className="addAct-adress">
              <input type="text" placeholder="Lieu" />
              <button className="addAct-adressMap" type="submit">
                <MapIcon id="map-Icon" />
              </button>
            </div>

            <button className="addAct-btn" type="submit">
              Publier
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddActivityPopUp;
