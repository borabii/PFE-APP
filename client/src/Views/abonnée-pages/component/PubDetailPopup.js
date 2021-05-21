import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Modal from "react-bootstrap/Modal";
import { getDayName } from "../../../utilis/date";
function PubDetailPopUp(props) {
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
                  {props.data.adresse}
                </dd>
                <dt>HORAIRES </dt>
                <dd>
                  {" "}
                  {getDayName(props.data.date_DebutPub)}
                  {getDayName(props.data.date_FinPub) ===
                  getDayName(props.data.date_DebutPub)
                    ? ""
                    : "jusqu'à" + getDayName(props.data.date_FinPub)}
                  {props.data.heure_debutPub} "a" {props.data.heure_finPub}
                </dd>
              </dl>
            </div>
          </div>
          <div className="pubDetailPopUp__organizateur">
            <h3>ORGANISER PAR</h3>
            <div className="organizateur__container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzWk9kfZiZ3-enCoEgErPVWons-ZKHSt_Ow&usqp=CAU"
                alt=""
              />
              <div className="organizateur__info">
                <dl>
                  <dd> Galaxy Gym</dd>
                  <dd>
                    <LocationOnIcon id="icon-loc" />
                    Monplaisir
                  </dd>
                  <dd> mail@gmail.com</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="pubDetailPopUp__participation">
            <button className="btn-participation">Je parrticipe</button>
          </div>

          {/*  */}
          <div className="pubDetailPopUp__prticipant ">
            <div className="pub-partcipantList">
              <div className="pub-particiant">
                <div className="pub-particiantLeft">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzWk9kfZiZ3-enCoEgErPVWons-ZKHSt_Ow&usqp=CAU"
                    alt=""
                  />
                  <div className="pub-particiantInfo">
                    <p id="participant-name">ben ouirane rabii</p>
                    <p id="participant-age">42 ans</p>
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
          <div className="pubDetailPopUp__prticipant ">
            <div className="pub-partcipantList">
              <div className="pub-particiant">
                <div className="pub-particiantLeft">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzWk9kfZiZ3-enCoEgErPVWons-ZKHSt_Ow&usqp=CAU"
                    alt=""
                  />
                  <div className="pub-particiantInfo">
                    <p id="participant-name">ben ouirane rabii</p>
                    <p id="participant-age">42 ans</p>
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
          <div className="pubDetailPopUp__prticipant ">
            <div className="pub-partcipantList">
              <div className="pub-particiant">
                <div className="pub-particiantLeft">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzWk9kfZiZ3-enCoEgErPVWons-ZKHSt_Ow&usqp=CAU"
                    alt=""
                  />
                  <div className="pub-particiantInfo">
                    <p id="participant-name">ben ouirane rabii</p>
                    <p id="participant-age">42 ans</p>
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
          <div id="hide">ss</div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PubDetailPopUp;
