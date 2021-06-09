import React, { useEffect, useContext } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Modal from "react-bootstrap/Modal";
import { getDayName, calucleAge } from "../../../utilis/date";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PubContext from "../../../Context/Publication/pubContext";
import Spinner1 from "../../layout/Spinner1";
import history from "../../../utilis/history";
function ManagePubModalShow(props) {
  const pubContext = useContext(PubContext);
  const {
    getParticipantData,
    participantData,
    ClearParticipantData,
    loading,
    acceptParticipant,
    refuseParticipant,
  } = pubContext;
  useEffect(() => {
    getParticipantData(props.data._id);
    return () => {
      ClearParticipantData();
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
                    ? " "
                    : " jusqu'à " + getDayName(props.data.date_FinPub) + " de "}
                  {props.data.heure_debutPub}
                  {props.data.heure_finPub === props.data.heure_debutPub
                    ? ""
                    : " à " + props.data.heure_finPub}
                </dd>
              </dl>
            </div>
          </div>
          <div id="hide">ss</div>

          <h4>Participant</h4>
          {!loading && participantData !== null ? (
            participantData && participantData.length > 0 ? (
              participantData.map((item, index) => {
                return (
                  <div className="pubDetailPopUp__prticipant " key={index}>
                    <div className="pub-partcipantList">
                      <div className="pub-particiant">
                        <div className="pub-particiantLeft">
                          <img
                            src={`http://localhost:8000/${item.imageProfile}`}
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
                              {/* {item.adress} */}
                            </p>
                          </div>
                        </div>
                        <div className="pub-participant-action">
                          <div className="pub-participant-actioIcon">
                            {!loading &&
                            participantData !== null &&
                            props.data.participants.filter(function (
                              participant
                            ) {
                              return (
                                participant._id === item._id &&
                                participant.etat === "attent"
                              );
                            }).length > 0 ? (
                              <>
                                <CheckIcon
                                  id="accpetParticipant-icon"
                                  onClick={() =>
                                    acceptParticipant(props.data._id, item._id)
                                  }
                                />
                                <ClearIcon
                                  id="removeParticipant-icon"
                                  onClick={() =>
                                    refuseParticipant(props.data._id, item._id)
                                  }
                                />
                              </>
                            ) : props.data.participants.filter(function (
                                participant
                              ) {
                                return (
                                  participant._id === item._id &&
                                  participant.etat === "accepter"
                                );
                              }).length > 0 ? (
                              <CheckCircleOutlineIcon id="accpetedParticipant-icon" />
                            ) : (
                              <HighlightOffIcon id="refusedParticipant-icon" />
                            )}

                            <AccountBoxIcon
                              id="visitParticipantAccount-icon"
                              onClick={() =>
                                history.push(
                                  `/AbonnéHomePage/AbonnéProfile/${item._id}`
                                )
                              }
                            />
                          </div>
                        </div>
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

export default ManagePubModalShow;
