import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function AddActivityPopUp(props) {
  const [nbrParticipantCounter, setNbrParticipantCounter] = useState(0);
  const increment = () => {
    setNbrParticipantCounter(nbrParticipantCounter + 1);
  };
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
          Ajouter une Activité
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addActivityPopUp">
          <form className="addAct-form">
            <div className="addAct-principalInfo">
              <h2>information Principale</h2>
              <textarea placeholder="hhh" />
              <input type="date" placeholder=" Ville" />
              <input type="date" placeholder=" Ville" />
            </div>
            <div className="addAct-NbrParticipant">
              <div className="nbrParticipant-left">
                <p>Nombre Participant:</p>
                <p id="counter-result">{nbrParticipantCounter}</p>
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
            <div className="addAct-category">
              <h2>Catégorie</h2>
              <Select
                isMulti
                name="colors"
                options={options}
                className="select"
                classNamePrefix="select"
              />
            </div>
            <h2>Lieu d'activité</h2>
            <div className="addAct-adress">
              <input type="text" placeholder="cat" />
            </div>

            <button className="" type="submit">
              Publier
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddActivityPopUp;
