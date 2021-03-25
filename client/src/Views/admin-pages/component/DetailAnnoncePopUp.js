import React from "react";
import Modal from "react-bootstrap/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function DetailAnnoncePopUs(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Consulter Annonce
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailAnnonce">
          <div className="detailAnnonce__top">
            <img
              src="https://www.fitadium.com/conseils/wp-content/uploads/2020/05/halteres-ou-machines.jpg"
              alt=""
            />
          </div>
          <div className="detailAnnonce__midle">
            <h4>INFORMATION PRINCIPALE</h4>
            <div className="annonce__info">
              <dl>
                <dt>Catégoris</dt>
                <dd>Fitness</dd>

                <dt>Tarif</dt>
                <dd>100dt/Mois</dd>
                <dt>Adresse</dt>
                <dd>
                  <LocationOnIcon id="icon-loc" />
                  Tunis{" "}
                </dd>
                <dt>HORAIRES DE TRAVAIL</dt>
                <dd> Lundi-jeudi 06:30 - 21:30 H </dd>
                <dt>Nombre de place</dt>
                <dd>20/groupe</dd>
                <dt>Description</dt>
                <dd>
                  Abdos-fessiers, Barres-Haltères, Gym Silhouette,… Pour vous
                  tonifier, modeler votre silhouette, avoir une meilleure
                  posture… Zumba, Cardio Move, Step, danse afro. Pour améliorer
                  votre condition physique, vous dépenser, bruler les calories,
                  tout en vous amusant.
                </dd>
              </dl>
            </div>
          </div>

          <div className="detailAnnonce__bottom">
            <h3>ORGANISER PAR</h3>
            <div className="bottom__container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzWk9kfZiZ3-enCoEgErPVWons-ZKHSt_Ow&usqp=CAU"
                alt=""
              />
              <div className="bottom__info">
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
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailAnnoncePopUs;
