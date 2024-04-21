import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Modal from "react-bootstrap/Modal";
import { getDate, getTime } from "../../../utilis/date";
function DetailEventPopUp(props) {
  const {
    categorie,
    description,
    tarif,
    nbr_place,
    date_DebutPub,
    date_FinPub,
  } = props.data;
  const { imageCouverture, nomAnnonceur, adress, emailProAnnonceur } =
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
          Consulter Evenement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailEvent">
          <div className="consulterActivite__midle">
            <h4>INFORMATION PRINCIPALE</h4>
            <div className="activite__info">
              <dl>
                <dt>Catégoris</dt>
                <dd>{categorie}</dd>
                <dt>Tarif</dt>
                <dd>{tarif}</dd>
                <dt>Nombre de place</dt>
                <dd>{nbr_place}</dd>
                <dt>Description</dt>
                <dd>{description}</dd>

                <dt>Date debut</dt>
                <dd>
                  {" "}
                  Le {getDate(date_DebutPub)} à {getTime(date_DebutPub)}
                </dd>
                <dt>Date fin</dt>
                <dd>
                  {" "}
                  Le {getDate(date_FinPub)} à {getTime(date_FinPub)}
                </dd>
              </dl>
            </div>
          </div>

          <div className="detailEvent__bottom">
            <h3>ORGANISER PAR</h3>
            <div className="bottom__container">
              <img src={`http://localhost:8000/${imageCouverture}`} alt="" />
              <div className="event__info">
                <dl>
                  <dd> Annonceur : {nomAnnonceur} </dd>
                  <dd>
                    Adresse:
                    <LocationOnIcon id="icon-loc" />
                    {/* {adress} */}
                  </dd>
                  <dd>Email:{emailProAnnonceur} </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailEventPopUp;
