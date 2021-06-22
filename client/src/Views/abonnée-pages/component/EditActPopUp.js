import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import PubContext from "../../../Context/Publication/pubContext";
import swal from "sweetalert";
import moment from "moment";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { getNowDate } from "../../../utilis/date";
import addPubsFormValidation from "../../../utilis/addPubsFromValidation";
function EditActPopUp(props) {
  //app level state
  const pubContext = useContext(PubContext);
  const { editPub, deletePub } = pubContext;
  //component level state
  const [actvité, setActvité] = useState({
    description: "",
    date_DebutPub: moment(props.actDetail.date_DebutPub).format("YYYY-MM-DD"),
    heure_debutPub: "",
    date_FinPub: "",
    heure_finPub: "",
  });
  const {
    description,
    date_DebutPub,
    heure_debutPub,
    date_FinPub,
    heure_finPub,
  } = actvité;
  // this state is use for handle participant counter value
  const [nbr_place, setNbr_place] = useState(0);
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
  //state for handling error msg
  const [errorsMsg, setErrorsMsg] = useState({});

  // run when model is open
  useEffect(() => {
    if (props.actDetail) {
      setActvité(props.actDetail);
      setNbr_place(props.actDetail.nbr_place);
    }
    return () => {
      setActvité({
        description: "",
        date_DebutPub: "",
        heure_debutPub: "",
        date_FinPub: "",
        heure_finPub: "",
      });
      setNbr_place(0);
    };
  }, [props.actDetail, props.show]);
  const editActivité = () => {
    if (Object.keys(errorsMsg).length === 0) {
      editPub(
        {
          description,
          date_DebutPub,
          heure_debutPub,
          date_FinPub,
          heure_finPub,
          nbr_place,
        },
        props.actDetail._id
      ).then(
        setActvité({
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
  const handelChange = (event) => {
    setActvité({
      ...actvité,
      [event.target.name]: event.target.value,
    });
    setErrorsMsg(addPubsFormValidation(actvité));
  };
  console.log(actvité);

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
                value={actvité.description}
                onChange={handelChange}
                required
              />
              <div id="ActStart-date">
                <span>Date début</span>
                <input
                  type="date"
                  name="date_DebutPub"
                  value={moment(actvité.date_DebutPub).format("YYYY-MM-DD")}
                  min={getNowDate()}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_debutPub"
                  value={actvité.heure_debutPub}
                  onChange={handelChange}
                />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input
                  type="date"
                  name="date_FinPub"
                  value={moment(actvité.date_FinPub).format("YYYY-MM-DD")}
                  min={moment(actvité.date_DebutPub).format("YYYY-MM-DD")}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_finPub"
                  value={actvité.heure_finPub}
                  onChange={handelChange}
                />
              </div>
            </div>
            {errorsMsg && <p id="addPubsform-errorMsg">{errorsMsg.heurePub}</p>}
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
