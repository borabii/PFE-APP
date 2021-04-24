import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import MapIcon from "@material-ui/icons/Map";
import PubContext from "../../../Context/Publication/pubContext";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function AddActivityPopUp(props) {
  const pubContext = useContext(PubContext);
  const { addAct } = pubContext;
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
  const [activity, setActivity] = useState({
    description: "",
    adresse: "",
    nbr_place: "",
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
  } = activity;

  const [categorie, setCategorie] = useState("");

  const handelChange = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
    console.log(activity);
  };

  const handleInputChange = (inputValue) => {
    setCategorie(inputValue.value);
    console.log(categorie);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    addAct({
      description,
      categorie,
      adresse,
      nbr_place,
      date_DebutPub,
      heure_debutPub,
      date_FinPub,
      heure_finPub,
    });
    setActivity({
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
          <form className="addAct-form" onSubmit={handleSubmit}>
            <div className="addAct-principalInfo">
              <h3>information Principale</h3>
              <textarea
                rows="4"
                cols="50"
                placeholder="Description"
                name="description"
                value={activity.description}
                onChange={handelChange}
                required
              />
              <div id="ActStart-date">
                <span>Date début</span>
                <input
                  type="date"
                  name="date_DebutPub"
                  value={activity.date_DebutPub}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_debutPub"
                  value={activity.heure_debutPub}
                  onChange={handelChange}
                />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input
                  type="date"
                  name="date_FinPub"
                  value={activity.date_FinPub}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_finPub"
                  value={activity.heure_finPub}
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
                // value={activity.categorie}
                onChange={handleInputChange}
              />
            </div>
            <h3>Lieu d'activité</h3>
            <div className="addAct-adress">
              <input
                type="text"
                placeholder="Lieu"
                name="adresse"
                value={activity.adresse}
                onChange={handelChange}
                required
              />
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
