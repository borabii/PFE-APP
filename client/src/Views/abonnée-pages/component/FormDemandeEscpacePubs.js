import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useMemo,
  Fragment,
} from "react";
import Select from "react-select";
import UserContext from "../../../Context/user/userContext";
import { useSnackbar } from "notistack";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Icon } from "leaflet";
function FormDemandeEscpacePubs() {
  //componenet level state
  //state for handling user current position in latitude and longitude
  const [pos, setpos] = useState(null);
  //state for handling user input
  const [demandeAnnonceur, setDemandeAnnonceur] = useState({
    nomAnnonceur: "",
    adresseAnnonceur: "",
    numTelAnnonceur: "",
    emailProAnnonceur: "",
    catégorieAnnonceur: "",
    justificatifAnnonceur: "",
  });
  //app level state
  //useContext
  const userContext = useContext(UserContext);
  const {
    sendDemandeAbonné,
    responseMessage,
    ClearResponseMessage,
    catégorieOption,
  } = userContext;

  const handleSubmit = async (event) => {
    event.preventDefault();
    //creat a new object formData from state(demandeAnnonceur) value
    const formData = new FormData();
    formData.append("nomAnnonceur", demandeAnnonceur.nomAnnonceur);
    formData.append("numTelAnnonceur", demandeAnnonceur.numTelAnnonceur);
    formData.append("adrlat", pos.lat);
    formData.append("adrlng", pos.lng);
    formData.append("emailProAnnonceur", demandeAnnonceur.emailProAnnonceur);
    formData.append("catégorieAnnonceur", demandeAnnonceur.catégorieAnnonceur);
    formData.append(
      "justificatifAnnonceur",
      demandeAnnonceur.justificatifAnnonceur
    );

    //global method created in userState to send formDate to server
    sendDemandeAbonné(formData);
    setIsRequestAlreadySent({
      isSent: true,
    });
    //clear form after submit
    setDemandeAnnonceur({
      nomAnnonceur: "",
      adresseAnnonceur: "",
      numTelAnnonceur: "",
      emailProAnnonceur: "",
      catégorieAnnonceur: "",
      justificatifAnnonceur: "",
    });
  };
  // method used to handel inputs change in form
  const handelChange = (event) => {
    setDemandeAnnonceur({
      ...demandeAnnonceur,
      [event.target.name]: event.target.value,
    });
  };
  // method used to handel select change in form
  const handelCatégorieChange = (selectedOption) => {
    setDemandeAnnonceur({
      ...demandeAnnonceur,
      catégorieAnnonceur: selectedOption.label,
    });
  };
  // method used to handel inputs[type=file] change in form
  const imageSelectHandler = (event) => {
    setDemandeAnnonceur({
      ...demandeAnnonceur,
      justificatifAnnonceur: event.target.files[0],
    });
  };
  //used to display response message if exisit
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (responseMessage !== "aucune message") {
      enqueueSnackbar(responseMessage, { variant: "success" });
    }
    return () => {
      ClearResponseMessage();
    };
  }, [responseMessage]);
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
      iconUrl: "/flag.svg",
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
  const [IsRequestAlreadySent, setIsRequestAlreadySent] = useState({
    isSent: null,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/EtatDemandeEscpaceAnnonceur")
      .then((res) => setIsRequestAlreadySent(res.data));
  }, []);
  //
  return (
    <div className="FormDemandeEscpacePubs">
      <h1>Formulaire demande escpace publicitaire</h1>
      {IsRequestAlreadySent.isSent ? (
        <Fragment>
          <div className="requestAlreadySent-msg">
            <div className="requestAlreadySent-msgLeft">
              <CheckCircleOutlineIcon id="checkIcon" />
            </div>
            <div className="requestAlreadySent-msgRigth">
              <h2>Votre demande est en cours de traitement</h2>
              <p>Nous vous informons des que votre demande est accepté</p>
              <p>Merci de patienter</p>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <form
            className="FormDemandeEscpacePubs-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="demmande-formInput">
              <label>
                Nom<span>*</span>
              </label>
              <input
                type="text"
                name="nomAnnonceur"
                value={demandeAnnonceur.nomAnnonceur}
                onChange={handelChange}
                required
              />
            </div>

            <div className="demmande-formInput">
              <label>
                Numéro téléphone<span>*</span>
              </label>
              <input
                type="tel"
                name="numTelAnnonceur"
                value={demandeAnnonceur.numTelAnnonceur}
                onChange={handelChange}
                required
              />
            </div>
            <div className="demmande-formInput">
              <label>Email professionelle</label>
              <input
                type="email"
                name="emailProAnnonceur"
                value={demandeAnnonceur.emailProAnnonceur}
                onChange={handelChange}
              />
            </div>
            <div className="demmande-formSelect">
              <label>
                Catégorie<span>*</span>
              </label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="catégorieAnnonceur"
                options={catégorieOption}
                onChange={handelCatégorieChange}
              />
            </div>
            <div className="demmande-formInput">
              <label>
                Justificatif<span>*</span>
              </label>
              <input
                type="file"
                id="justificatif-input"
                name="justificatifAnnonceur"
                onChange={imageSelectHandler}
                required
              />
            </div>
            <h3 id="adr-title">
              Adresse<span>*</span>
            </h3>
            <div className="demande-adresse">
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
            <div className="demmande-formBtn">
              <button>Ennvoyer</button>
            </div>
          </form>
        </Fragment>
      )}
    </div>
  );
}

export default FormDemandeEscpacePubs;
