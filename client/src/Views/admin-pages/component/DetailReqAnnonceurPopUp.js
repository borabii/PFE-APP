import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DetailReqAnnonceurPopUp(props) {
  const {
    _id,
    demandeur,
    nomAnnonceur,
    emailProAnnonceur,
    demandeDate,
    catégorieAnnonceur,
    justificatifAnnonceur,
  } = props.user;
  //run when admin click on Accepter button to accepter a demande
  const acceptDemande = () => {
    axios.post(`http://localhost:8000/api/users/Admin/AddAnnonceur/${_id}`);
  };
  const refuserDemande = (_id) => {};
  // useEffect(() => {}, [input]);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Demande</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="detailReqAnnonceurPopUp">
            <div className="info__top">
              <h4>Information de demandeur</h4>
              <div className="top__container">
                <div className="top__img">
                  <img
                    src={`http://localhost:8000/${justificatifAnnonceur}`}
                    alt=""
                  />
                </div>
                <div className="top__Info">
                  <ul>
                    <li>Nom: {_id}</li>
                    <li>Prénom: </li>
                    <li>Email: </li>
                    <li>Date inscription:</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info__bottom">
              <h4>Information demande</h4>
              <div className="info__container">
                <ul>
                  <li>Nom:{nomAnnonceur}</li>
                  <li>Catégorie:{catégorieAnnonceur}</li>
                  <li>Email:{emailProAnnonceur}</li>
                  <li>Date demande:{demandeDate}</li>
                  <li>Document justificatif:</li>
                </ul>
              </div>
            </div>
            <div className="info__image">
              <h4>Document justificatif:</h4>
              <div className="info__container">
                <div className="top__img">
                  <img
                    src={`http://localhost:8000/${justificatifAnnonceur}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="demande__action">
              <div className="demande__form">
                <button id="accept__btn" onClick={acceptDemande}>
                  Ajouter
                </button>
                <button id="refuse__btn">Refuser</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailReqAnnonceurPopUp;
