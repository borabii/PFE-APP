import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import MapIcon from "@material-ui/icons/Map";

function AddEventPopUp(props) {
  // this state is use for handle participant counter value
  const [nbr_place, setNbr_place] = useState(0);

  //this methode is used for increment the state value(nbrParticipantCounter) by 1
  const increment = () => {
    setNbr_place(nbr_place + 1);
  };
  //this methode is used for decrement the state value(nbrParticipantCounter) by 1
  const decrement = () => {
    if (nbr_place < 1) {
      setNbr_place(0);
    } else {
      setNbr_place(nbr_place - 1);
    }
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const animatedComponents = makeAnimated();
  const [categorie, setCategorie] = useState("");
  const handleInputChange = (inputValue) => {
    setCategorie(inputValue.value);
  };
  const [evenement, setEvenement] = useState({
    description: "",
    adresse: "",
    nbr_place: "",
    date_DebutPub: "",
    heure_debutPub: "",
    date_FinPub: "",
    heure_finPub: "",
    tarifEvent: "",
  });
  const {
    description,
    adresse,
    date_DebutPub,
    heure_debutPub,
    date_FinPub,
    heure_finPub,
    tarifEvent,
  } = evenement;
  const handelChange = (event) => {
    setEvenement({
      ...evenement,
      [event.target.name]: event.target.value,
    });
    console.log(evenement);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEvenement({
      description: "",
      adresse: "",
      nbr_place: "",
      date_DebutPub: "",
      heure_debutPub: "",
      date_FinPub: "",
      heure_finPub: "",
    });
    setCategorie("");
    setNbr_place(0);
  };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajouter Événement{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addActivityPopUp">
          <form className="addAct-form" onSubmit={handleSubmit}>
            <div className="addAct-principalInfo">
              <h3>information Principale</h3>
              <textarea
                rows="4"
                cols="50"
                placeholder="Description"
                name="description"
                value={evenement.description}
                onChange={handelChange}
                required
              />
              <div id="ActStart-date">
                <span>Date début</span>
                <input
                  type="date"
                  name="date_DebutPub"
                  value={evenement.date_DebutPub}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_debutPub"
                  value={evenement.heure_debutPub}
                  onChange={handelChange}
                />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input
                  type="date"
                  name="date_FinPub"
                  value={evenement.date_FinPub}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_finPub"
                  value={evenement.heure_finPub}
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="addAct-NbrParticipant">
              <div className="nbrParticipant-left">
                <p>Nombre Participant</p>
                <div id="counter-result">
                  <h4>{nbr_place}</h4>
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
                className="basic-single"
                classNamePrefix="select"
                name="actCategory"
                options={options}
                value={evenement.categorie}
                onChange={handleInputChange}
              />
            </div>
            <h3>Lieu d'événement</h3>
            <div className="addAct-adress">
              <input
                type="text"
                placeholder="Lieu"
                name="adresse"
                value={evenement.adresse}
                onChange={handelChange}
                // required
              />
              <button className="addAct-adressMap" type="submit">
                <MapIcon id="map-Icon" />
              </button>
            </div>
            <h3>Tarif</h3>
            <div className="addAct-adress">
              <input
                type="text"
                placeholder="Tarif"
                name="tarifEvent"
                value={evenement.tarifEvent}
                onChange={handelChange}
                id="tarifEvent"
                required
              />
            </div>
            <h3>Équipe</h3>
            <div className="addAct-category" id="eventEquipe">
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
              />
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

export default AddEventPopUp;
