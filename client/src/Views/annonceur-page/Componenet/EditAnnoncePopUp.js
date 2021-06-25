import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";

import UserContext from "../../../Context/user/userContext";
import PubContext from "../../../Context/Publication/pubContext";
import swal from "sweetalert";
import { getNowDate } from "../../../utilis/date";

import moment from "moment";

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
  const [annonce, setAnnonce] = useState({
    description: "",
    date_DebutPub: "",
    date_FinPub: "",
    categorie: "",
  });
  //method run when user click on btn (Modifer) to edit event
  const editEvent = () => {
    editPub(annonce, annonce._id).then(
      setAnnonce({
        description: "",
        date_DebutPub: "",
        date_FinPub: "",
        categorie: "",
      }),
      props.onHide()
    );
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
          deletePub(annonce._id),
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
    setAnnonce({
      ...annonce,
      [event.target.name]: event.target.value,
    });
  };
  //handel input select change and set state with the value
  const handleSelectInputChange = (selectedOption) => {
    setAnnonce({
      ...annonce,
      categorie: selectedOption.label,
    });
  };
  // run when model is open
  useEffect(() => {
    if (props.data) {
      setAnnonce(props.data);
    }
  }, [props.data, props.show]);
  return (
    <Modal
      {...props}
      size="md"
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
                value={annonce.description}
                onChange={handelChange}
                required
              />
              <div id="ActStart-date">
                <span>Date début</span>
                <input
                  type="date"
                  name="date_DebutPub"
                  defaultValue={moment(annonce.date_DebutPub).format(
                    "YYYY-MM-DD"
                  )}
                  min={getNowDate()}
                  onChange={handelChange}
                  required
                />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input
                  type="date"
                  name="date_FinPub"
                  defaultValue={moment(annonce.date_FinPub).format(
                    "YYYY-MM-DD"
                  )}
                  min={moment(annonce.date_DebutPub).format("YYYY-MM-DD")}
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
                    (option) => option.label === annonce.categorie
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
