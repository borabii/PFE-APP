import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import UserContext from "../../../Context/user/userContext";
import PubContext from "../../../Context/Publication/pubContext";
import swal from "sweetalert";

function EditEventPopUp(props) {
  //app level state
  //User context
  const userContext = useContext(UserContext);
  const { catégorieOption } = userContext;
  //Publication context
  const pubContext = useContext(PubContext);
  const { editPub, deletePub } = pubContext;

  //this methode is used for increment the state value(nbrParticipantCounter) by 1
  const increment = () => {
    setNbr_place((prevnbr_place) => prevnbr_place + 1);
  };
  //this methode is used for decrement the state value(nbrParticipantCounter) by 1
  const decrement = () => {
    if (nbr_place < 1) {
      setNbr_place(0);
    } else {
      setNbr_place((prevnbr_place) => prevnbr_place - 1);
    }
  };
  //component level state
  // this state is used to store user inputed value in form
  const [evenement, setEvenement] = useState({
    description: "",
    adresse: "",
    date_DebutPub: "",
    heure_debutPub: "",
    date_FinPub: "",
    heure_finPub: "",
    tarif: "",
    categorie: "",
  });
  const {
    description,
    adresse,
    date_DebutPub,
    heure_debutPub,
    date_FinPub,
    heure_finPub,
    tarif,
    categorie,
  } = evenement;
  // this state is use for handle participant counter value
  const [nbr_place, setNbr_place] = useState(0);
  //method run when user click on btn (Modifer) to edit event
  const editEvent = () => {
    editPub(
      {
        description,
        adresse,
        nbr_place,
        date_DebutPub,
        heure_debutPub,
        date_FinPub,
        heure_finPub,
        tarif,
        categorie,
      },
      evenement._id
    );
    setEvenement({
      description: "",
      adresse: "",
      nbr_place: "",
      date_DebutPub: "",
      heure_debutPub: "",
      date_FinPub: "",
      heure_finPub: "",
      tarif: "",
      categorie: "",
    });
    setNbr_place(0);
    props.onHide();
  };
  //run when use click on btn(Supprimer) for deleting event
  const deleteEvent = () => {
    swal({
      title: `Vous êtes sûre de supprimer?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          deletePub(evenement._id),
          swal({ icon: "success", title: "Événement supprimé avec succés!" }),
          props.onHide()
        );
      } else {
        swal("opération annuler!");
      }
    });
  };
  //handel user input change and set state with inputed value
  const handelChange = (event) => {
    setEvenement({
      ...evenement,
      [event.target.name]: event.target.value,
    });
  };
  //handel input select change and set state with the value
  const handleSelectInputChange = (selectedOption) => {
    setEvenement({
      ...evenement,
      categorie: selectedOption.label,
    });
  };
  // run when model is open
  useEffect(() => {
    if (props.data) {
      setEvenement(props.data);
      setNbr_place(props.data.nbr_place);
    }
  }, [props.data, props.show]);
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
          Modifer Événement{" "}
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
                value={evenement.description}
                onChange={handelChange}
                required
              />
              <div id="ActStart-date">
                <span>Date début</span>
                <input
                  type="date"
                  name="date_DebutPub"
                  defaultValue={
                    evenement.date_DebutPub
                      ? evenement.date_DebutPub.substr(0, 10)
                      : ""
                  }
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
                  defaultValue={
                    evenement.date_FinPub
                      ? evenement.date_FinPub.substr(0, 10)
                      : ""
                  }
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
                name="categorie"
                options={catégorieOption}
                value={
                  catégorieOption &&
                  catégorieOption.filter(
                    (option) => option.label === evenement.categorie
                  )
                }
                onChange={handleSelectInputChange}
              />
            </div>

            <h3>Tarif</h3>
            <div className="addAct-adress">
              <input
                type="text"
                placeholder="Tarif"
                name="tarif"
                value={evenement.tarif}
                onChange={handelChange}
                id="tarifEvent"
                required
              />
            </div>

            <div id="editEventAction">
              <div className="edit__action">
                <button id="edit__btn" onClick={editEvent}>
                  Modifier
                </button>
              </div>
              <button id="delete-btn" onClick={deleteEvent}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditEventPopUp;
