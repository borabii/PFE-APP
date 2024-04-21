import React, { useState, useEffect } from "react";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import { getDate } from "../../../utilis/date";
function DetailAnnonceurPopUp(props) {
  const [nbrPubs, setnbrPubs] = useState({});

  const {
    nomAnnonceur,
    adresseAnnonceur,
    imageCouverture,
    catégorieAnnonceur,
    aceptationDate,
    followers,
  } = props.user;
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/Publication/Admin/getAnnonceEventNumber/${props.user._id}`
      )
      .then((response) => setnbrPubs(response.data));
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
          Détail Annonceur
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailReclamationPopUps" id="dd">
          <div className="popupBody__top">
            <h4>Information propritaire</h4>
            <div className="top__container">
              <div className="user__img">
                <img
                  src={`http://localhost:8000/${props.demandeur.imageProfile}`}
                  alt=""
                />
              </div>
              <div className="user__Info">
                <ul>
                  <li>Nom : {props.demandeur.firstName}</li>
                  <li>Prenom: {props.demandeur.lastName} </li>
                  <li>Email: {props.demandeur.email} </li>
                  <li>
                    Date d'inscrit: {getDate(props.demandeur.inscriDate)}{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="popupBody__middel">
            <h4>Information compte</h4>

            <div className="middel__container ">
              <div className="user__img">
                <img src={`http://localhost:8000/${imageCouverture}`} alt="" />
              </div>
              <div className="user__Info">
                <ul>
                  <li>Nom: {nomAnnonceur}</li>
                  {/* <li>Adresse: {adresseAnnonceur}</li> */}
                  <li>Catégorie: {catégorieAnnonceur}</li>
                  <li>Date création: {getDate(aceptationDate)}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="popupBody__bottom">
            <h4> Historique</h4>
            <div className="detail__account">
              <div className="info-item">
                <h6>Nombre Abonnés</h6>
                <h6>{followers?.length}</h6>
              </div>
              <div className="info-item">
                <h6> Avis</h6>
                <h6>{nbrPubs.totalRate !== null ? nbrPubs.totalRate : "0"}</h6>
              </div>

              <div className="info-item">
                <h6> nombre d'annonce</h6>
                <h6>{nbrPubs.nbrAnnoncedeannonceur}</h6>
              </div>

              <div className="info-item">
                <h6> nombre d'event</h6>
                <h6>{nbrPubs.nbrEventdeannonceur}</h6>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailAnnonceurPopUp;
