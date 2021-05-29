import React from "react";
import Modal from "react-bootstrap/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { getDate, getTime, calucleAge } from "../../../utilis/date";

function DetailActivityPopUp(props) {
  const { categorie, description, date_DebutPub, date_FinPub } = props.user;
  const { imageProfile, firstName, lastName, dateOfBirth, email } =
    props.organisateur;
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
          Détail Activité
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="consulterActivite">
          <div className="consulterActivite__midle">
            <h4>INFORMATION PRINCIPALE</h4>
            <div className="activite__info">
              <dl>
                <dt>Catégorie</dt>
                <dd>{categorie}</dd>
                <dt>Description</dt>
                <dd>{description}</dd>
                <dt>Adresse</dt>
                <dd>
                  <LocationOnIcon id="icon-loc" />
                  {/* {adresse} */}
                </dd>
                <dt>Date debut</dt>
                <dd>
                  Le {getDate(date_DebutPub)} à {getTime(date_DebutPub)}
                </dd>
                <dt>Date fin</dt>
                <dd>
                  {" "}
                  Le{getDate(date_FinPub)} à {getTime(date_FinPub)}
                </dd>
              </dl>
            </div>
          </div>
          <div className="consulterActivite__bottom">
            <h3>ORGANISER PAR</h3>
            <div className="bottom__container">
              <img src={`http://localhost:8000/${imageProfile}`} alt="" />
              <div className="event__info">
                <dl>
                  <dd>
                    {" "}
                    Nom et Prénom : {firstName} {lastName}{" "}
                  </dd>
                  <dd>
                    Adresse:
                    <LocationOnIcon id="icon-loc" />
                    {/* {adresse} */}
                  </dd>
                  <dd>Age: {calucleAge(dateOfBirth)}ans</dd>

                  <dd>Email: {email} </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailActivityPopUp;
