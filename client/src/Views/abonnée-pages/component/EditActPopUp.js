import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import MapIcon from "@material-ui/icons/Map";
import PubContext from "../../../Context/Publication/pubContext";
import swal from "sweetalert";
import moment from "moment";
import addPubsFormValidation from "../../../utilis/addPubsFromValidation";

function EditActPopUp(props) {
  //app level state
  const pubContext = useContext(PubContext);
  const { editPub, deletePub } = pubContext;
  //component level state
  const [evenement, setEvenement] = useState({
    description: props.actDetail.description,
    adresse: "",
    date_DebutPub: moment(props.actDetail.date_DebutPub).format("YYYY-MM-DD"),
    heure_debutPub: props.actDetail.heure_debutPub,
    date_FinPub: moment(props.actDetail.date_FinPub).format("YYYY-MM-DD"),
    heure_finPub: props.actDetail.heure_finPub,
  });
  //state for handling error msg
  const [errorsMsg, setErrorsMsg] = useState({});

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
    setErrorsMsg(addPubsFormValidation(evenement));
    if (Object.keys(errorsMsg).length <= 0) {
      editPub(
        {
          description,
          adresse,
          date_DebutPub: moment(date_DebutPub + " " + heure_debutPub).format(),
          heure_debutPub,
          date_FinPub: moment(date_FinPub + " " + heure_finPub).format(),
          heure_finPub,
        },
        props.actDetail._id
      ).then(
        setEvenement({
          description: "",
          adresse: "",
          nbr_place: "",
          date_DebutPub: "",
          heure_debutPub: "",
          date_FinPub: "",
          heure_finPub: "",
          tarifEvent: "",
        }),
        props.onHide()
      );
    }
  };

  const deleteActivité = () => {
    swal({
      title: `Vous êtes sûre de supprimer?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          deletePub(props.actDetail._id),
          swal({ icon: "success", title: "Activité supprimé avec succés!" }),
          props.onHide()
        );
      } else {
        swal("opération annuler!");
      }
    });
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
                defaultValue={evenement.description}
                onChange={handelChange}
                required
              />
              <div id="ActStart-date">
                <span>Date début</span>
                <input
                  type="date"
                  name="date_DebutPub"
                  defaultValue={evenement.date_DebutPub}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_debutPub"
                  defaultValue={evenement.heure_debutPub}
                  onChange={handelChange}
                />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input
                  type="date"
                  name="date_FinPub"
                  defaultValue={evenement.date_FinPub}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_finPub"
                  defaultValue={evenement.heure_finPub}
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
