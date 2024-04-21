import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import UserContext from "../../../Context/user/userContext";
import PubContext from "../../../Context/Publication/pubContext";
import { getNowDate, getTime } from "../../../utilis/date";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import addPubsFormValidation from "../../../utilis/addPubsFromValidation";
import moment from "moment";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
function AddEventPopUp(props) {
  //app level state
  const userContext = useContext(UserContext);
  const { catégorieOption, annonceur } = userContext;
  const pubContext = useContext(PubContext);
  const { addEvent } = pubContext;
  //componenet level state
  const [pos, setpos] = useState({
    lat: annonceur.adresseAnnonceur.coordinates[0],
    lng: annonceur.adresseAnnonceur.coordinates[1],
  });

  //
  const [errorsMsg, setErrorsMsg] = useState({});

  // this state is use for handle participant counter value
  const [nbr_place, setNbr_place] = useState(0);
  //
  // const [openMap, setOpenMap] = useState(false);

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

  const [evenement, setEvenement] = useState({
    description: "",
    adresse: "",
    date_DebutPub: getNowDate(),
    heure_debutPub: getTime(),
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

  //
  const handelTimeChange = (event) => {
    setEvenement({
      ...evenement,
      heure_finPub: event.target.value,
    });
    setErrorsMsg(addPubsFormValidation(evenement));
  };
  //
  //
  const handelDateChange = (event) => {
    setEvenement({
      ...evenement,
      date_FinPub: event.target.value,
    });
    setErrorsMsg(addPubsFormValidation(evenement));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    addEvent(
      {
        description,
        adresse: pos,
        nbr_place,
        date_DebutPub,
        heure_debutPub,
        date_FinPub,
        heure_finPub,
        tarif,
        categorie,
      },
      annonceur._id
    ).then(clearState);

    props.onHide();
  };
  //handel user change and set the state with inputed values
  const handelChange = (event) => {
    setEvenement({
      ...evenement,
      [event.target.name]: event.target.value,
    });
    setErrorsMsg(addPubsFormValidation(evenement));
  };

  // method used to handel select change in form
  const handelCatégorieChange = (selectedOption) => {
    setEvenement({
      ...evenement,
      categorie: selectedOption.label,
    });
  };
  //method user to let user locate user current pos and display a maker on his position
  //and let him chnage it by draking the marker
  const AddEventMapAdresse = () => {
    const markerRef = useRef(null);

    //run when moving maker and get new latlag and set state(pos) with new marker position
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setpos(marker.getLatLng());
          }
        },
      }),
      []
    );
    const icon1 = new Icon({
      iconUrl: "/eventMarker.svg",
      iconSize: [25, 25],
    });
    return pos === null ? null : (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={pos || [36.78729147, 10.18432617]}
        ref={markerRef}
        icon={icon1}
      />
    );
  };

  //method used to reset state after submit or when the component is unmounted
  const clearState = () => {
    setNbr_place(0);
    setEvenement({
      description: "",
      adresse: "",
      date_DebutPub: getNowDate(),
      heure_debutPub: getTime(),
      date_FinPub: getNowDate(),
      heure_finPub: "",
      tarif: "",
      categorie: "",
    });
    setpos({
      lat: annonceur.adresseAnnonceur.coordinates[0],
      lng: annonceur.adresseAnnonceur.coordinates[1],
    });
  };
  // useEffect(() => {
  //   return () => {
  //     setOpenMap(false);
  //   };
  // }, [props.show]);
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
          Ajouter Événement{" "}
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
                  value={evenement.date_DebutPub}
                  min={getNowDate()}
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
                  min={moment(evenement.date_DebutPub).format("YYYY-MM-DD")}
                  onChange={handelDateChange}
                  required
                />
                <input
                  type="time"
                  name="heure_finPub"
                  value={evenement.heure_finPub}
                  onChange={handelTimeChange}
                />
              </div>
            </div>
            {errorsMsg && <p id="addPubsform-errorMsg">{errorsMsg.datePub}</p>}
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
            <h3>Catégorie</h3>

            <div className="addAct-category">
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="categorie"
                options={catégorieOption}
                onChange={handelCatégorieChange}
              />
            </div>

            <h3>Tarif</h3>
            <div className="addAct-adress" id="tarif-event">
              <input
                type="number"
                placeholder="Tarif"
                name="tarif"
                value={evenement.tarif}
                onChange={handelChange}
                id="tarifEvent"
                required
              />
            </div>
            <h3>Lieu d'événement</h3>
            <div className="adr-option">
              <p>Votre adresse sera choisir par défaut</p>
              {/* <button
                id="openMap-btn"
                onClick={() => setOpenMap((openMap) => !openMap)}
              >
                Choisir sur map
              </button> */}
            </div>

            <div>
              <div className="addEvent-mapContainer">
                <MapContainer
                  center={pos}
                  zoom={13}
                  className="addActmap-style"
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <AddEventMapAdresse />
                </MapContainer>
              </div>
            </div>

            <button className="addAct-btn" onClick={handleSubmit}>
              Publier
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddEventPopUp;
