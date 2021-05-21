import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import MapIcon from "@material-ui/icons/Map";
import UserContext from "../../../Context/user/userContext";
import PubContext from "../../../Context/Publication/pubContext";
function EditAnnoncePopUp(props) {
  //app level state
  //User context
  const userContext = useContext(UserContext);
  const { catégorieOption } = userContext;
  //Publication context
  const pubContext = useContext(PubContext);
  const { editPub, deletePub } = pubContext;

  //component level state
  // this state is used to store user inputed value in form
  const [evenement, setEvenement] = useState({
    description: "",
    date_DebutPub: "",
    date_FinPub: "",
    categorie: "",
  });
  const {
    description,

    date_DebutPub,

    date_FinPub,

    categorie,
  } = evenement;
  // this state is use for handle participant counter value
  const [nbr_place, setNbr_place] = useState(0);
  //method run when user click on btn (Modifer) to edit event
  const editEvent = () => {
    editPub(
      {
        description,

        date_DebutPub,

        date_FinPub,

        categorie,
      },
      evenement._id
    );
    setEvenement({
      description: "",

      date_DebutPub: "",
      date_FinPub: "",

      categorie: "",
    });
  };
  //run when use click on btn(Supprimer) for deleting event
  const deleteEvent = () => {
    deletePub(evenement._id);
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
    }
  }, [props.data, props.show]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modifier Annonce
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

export default EditAnnoncePopUp;
