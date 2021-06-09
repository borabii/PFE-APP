import React, { useState, useContext, useRef, useMemo, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PubContext from "../../../Context/Publication/pubContext";
import UserContext from "../../../Context/user/userContext";
import { getNowDate, getTime, getDate } from "../../../utilis/date";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import addPubsFormValidation from "../../../utilis/addPubsFromValidation";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import moment from "moment";
function AddActivityPopUp(props) {
  //componenet level state
  const [pos, setpos] = useState(null);
  //state for handling error msg
  const [errorsMsg, setErrorsMsg] = useState({});

  //app level state
  const userContext = useContext(UserContext);
  const { catégorieOption } = userContext;
  const pubContext = useContext(PubContext);
  const { addAct } = pubContext;
  // this state is use for handle participant counter value
  const [nbr_place, setNbr_place] = useState(1);

  //this methode is used for increment the state value(nbrParticipantCounter) by 1
  const increment = () => {
    setNbr_place(nbr_place + 1);
  };
  //this methode is used for decrement the state value(nbrParticipantCounter) by 1
  const decrement = () => {
    if (nbr_place < 2) {
      setNbr_place(1);
    } else {
      setNbr_place(nbr_place - 1);
    }
  };

  // this state is used to store user inputed data
  const [activity, setActivity] = useState({
    description: "",
    adresse: "",
    date_DebutPub: getNowDate(),
    heure_debutPub: getTime(),
    date_FinPub: getNowDate(),
    heure_finPub: "",
    categorie: "",
    nbr_place: "",
  });
  const {
    description,
    adresse,
    date_DebutPub,
    heure_debutPub,
    date_FinPub,
    heure_finPub,
    categorie,
  } = activity;

  // method used to handel select change in form
  const handelCatégorieChange = (selectedOption) => {
    setActivity({
      ...activity,
      categorie: selectedOption.label,
    });
  };

  const handelChange = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
    setErrorsMsg(addPubsFormValidation(activity));
  };
  //
  const handelTimeChange = (event) => {
    setActivity({
      ...activity,
      heure_finPub: event.target.value,
    });
    setErrorsMsg(addPubsFormValidation(activity));
  };
  //
  //
  const handelDateChange = (event) => {
    setActivity({
      ...activity,
      date_FinPub: event.target.value,
    });
    setErrorsMsg(addPubsFormValidation(activity));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errorsMsg).length <= 0) {
      addAct({
        description,
        categorie,
        adresse: pos,
        nbr_place,
        date_DebutPub: moment(date_DebutPub + " " + heure_debutPub).format(),
        heure_debutPub,
        date_FinPub: moment(date_FinPub + " " + heure_finPub).format(),
        heure_finPub,
      }).then(clearState);
    }
  };
  //metho user to reset state after submit
  const clearState = () => {
    setActivity({
      description: "",
      adresse: "",
      date_DebutPub: getNowDate(),
      heure_debutPub: getTime(),
      date_FinPub: getNowDate(),
      heure_finPub: "",
    });
    setNbr_place(0);
    setErrorsMsg({});
    props.onHide();
  };
  //method user to let user locate user current pos and display a maker on his position
  //and let him chnage it by draking the marker
  const DraggableMarker = () => {
    const markerRef = useRef(null);
    //when clicking on the map locate user current position
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setpos(e.latlng);
        map.flyTo(e.latlng, 10);
      },
    });
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
      iconUrl: "/pin.svg",
      iconSize: [25, 25],
    });
    return pos === null ? null : (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={pos}
        ref={markerRef}
        icon={icon1}
      />
    );
  };
  useEffect(() => {
    return () => {
      setActivity({
        description: "",
        adresse: "",
        date_DebutPub: getNowDate(),
        heure_debutPub: getTime(),
        date_FinPub: getNowDate(),
        heure_finPub: "",
      });
      setNbr_place(0);
      setErrorsMsg({});
    };
  }, [props.show]);
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
                  min={getNowDate()}
                  onChange={handelChange}
                  required
                />
                <input
                  type="time"
                  name="heure_debutPub"
                  onChange={handelChange}
                  value={activity.heure_debutPub}
                />
              </div>
              <div id="ActEnd-date">
                <span>Date fin</span>

                <input
                  type="date"
                  name="date_FinPub"
                  value={activity.date_FinPub}
                  min={moment(activity.date_DebutPub).format("YYYY-MM-DD")}
                  onChange={handelDateChange}
                  required
                />

                <input
                  type="time"
                  name="heure_finPub"
                  value={activity.heure_finPub}
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
                menuPlacement="auto"
              />
            </div>
            <h3>Lieu d'activité</h3>
            <div className="addAct-adress">
              <div className="addAct-mapContainer">
                <MapContainer
                  center={[36.78729147, 10.18432617]}
                  zoom={13}
                  className="addActmap-style"
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <DraggableMarker />
                </MapContainer>
              </div>
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
