import React from "react";
import Modal from "react-bootstrap/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function DétailAnnoncePopUp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Détail Annonce
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailAnnonce">
          <div className="detailAnnonce__top">
            <img src={`http://localhost:8000/${props.data.image_url}`} alt="" />
          </div>
          <div className="detailAnnonce__midle">
            <h4>INFORMATION PRINCIPALE</h4>
            <div className="annonce__info">
              <dl>
                <dt>Catégoris</dt>
                <dd>{props.data.categorie}</dd>

                <dt>Tarif</dt>
                <dd>100dt/Mois</dd>
                <dt>Adresse</dt>
                <dd>
                  <LocationOnIcon id="icon-loc" />
                  {props.data.adresse}{" "}
                </dd>
                <dt>HORAIRES DE TRAVAIL</dt>
                <dd> Lundi-jeudi 06:30 - 21:30 H </dd>
                <dt>Nombre de place</dt>
                <dd>20/groupe</dd>
                <dt>Description</dt>
                <dd>{props.data.description}</dd>
              </dl>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DétailAnnoncePopUp;
