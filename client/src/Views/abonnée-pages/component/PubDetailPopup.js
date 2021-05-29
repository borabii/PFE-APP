import React, { useEffect, useContext } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { getDayName, calucleAge } from "../../../utilis/date";
import PubContext from "../../../Context/Publication/pubContext";
import Spinner1 from "../../layout/Spinner1";
import { useSnackbar } from "notistack";

function PubDetailPopUp(props) {
  const { enqueueSnackbar } = useSnackbar();

  const participate = () => {
    axios
      .put(
        `http://localhost:8000/api/Publication/partcipatePub/${props.data._id}`
      )
      .then((res) => enqueueSnackbar(res.data.msg, { variant: "success" }));
  };
  const pubContext = useContext(PubContext);
  const {
    getAcceptedParticipantData,
    acceptedParticipantData,
    ClearAcceptedParticipantData,
    loading,
  } = pubContext;
  useEffect(() => {
    getAcceptedParticipantData(props.data._id);
    return () => {
      ClearAcceptedParticipantData();
    };
  }, [props.show === true && !loading]);

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
          Détail publication{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="tt">
        <div className="pubDetailPopUp">
          <div className="pubDetailPopUp__info">
            <h4>INFORMATION PRINCIPALE</h4>
            <div className="pub__info">
              <dl>
                <dt>Catégoris</dt>
                <dd>{props.data.categorie}</dd>
                <dt>Description</dt>
                <dd id="description">{props.data.description}</dd>
                <dt>Adresse</dt>
                <dd>
                  <LocationOnIcon id="icon-loc" />
                  {/* {props.data.adresse} */}
                </dd>
                <dt>HORAIRES </dt>
                <dd>
                  {" "}
                  {getDayName(props.data.date_DebutPub)}
                  {getDayName(props.data.date_FinPub) ===
                  getDayName(props.data.date_DebutPub)
                    ? ""
                    : " jusqu'à " + getDayName(props.data.date_FinPub)}
                  {props.data.heure_debutPub} a {props.data.heure_finPub}
                </dd>
              </dl>
            </div>
          </div>
          <div className="pubDetailPopUp__organizateur">
            <h3>ORGANISER PAR</h3>
            <div className="organizateur__container">
              <img
                src={`http://localhost:8000/${props.user.imageProfile}`}
                alt=""
              />
              <div className="organizateur__info">
                <dl>
                  <dd>
                    {" "}
                    {props.user.firstName} {props.user.lastName}
                  </dd>
                  <dd>
                    <LocationOnIcon id="icon-loc" />
                    Monplaisir
                  </dd>
                  <dd> {props.user.email}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="pubDetailPopUp__participation">
            <button className="btn-participation" onClick={participate}>
              Je parrticipe
            </button>
          </div>

          {/*  */}

          {/*  */}
          {!loading && acceptedParticipantData !== null ? (
            acceptedParticipantData && acceptedParticipantData.length > 0 ? (
              acceptedParticipantData.map((item, index) => {
                return (
                  <div className="pubDetailPopUp__prticipant " key={index}>
                    <div className="pub-partcipantList">
                      <div className="pub-particiant">
                        <div className="pub-particiantLeft">
                          <img
                            src={`http://localhost:8000/${props.user.imageProfile}`}
                            alt=""
                          />
                          <div className="pub-particiantInfo">
                            <p id="participant-name">
                              {item.firstName + " " + item.lastName}
                            </p>
                            <p id="participant-age">
                              {calucleAge(item.dateOfBirth)} ans
                            </p>
                            <p id="participant-adresse">
                              <LocationOnIcon id="paricipantAdresse-icon" />
                              Djerba
                            </p>
                          </div>
                        </div>
                        <div className="pub-particiantAction">Voir Profile</div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 id="noParticipant-msg">Aucune participation</h1>
            )
          ) : (
            <Spinner1 />
          )}
          {/*  */}

          <div id="hide">ss</div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PubDetailPopUp;
