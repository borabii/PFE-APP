import React from "react";
import Modal from "react-bootstrap/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function DetailAnnoncePopUp(props) {
  const { categorie, description, adresse, nbr_place, date_Pub } = props.user;

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
          Détail Annonce
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
                <dd>{categorie}</dd>

                <dt>Adresse</dt>
                <dd>
                  <LocationOnIcon id="icon-loc" />
                  {adresse}
                </dd>
                <dt>HORAIRES </dt>
                <dd> {date_Pub}</dd>
                <dt>Nombre de place</dt>
                <dd>{nbr_place}</dd>
                <dt>Description</dt>
                <dd>{description}</dd>
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
              <div className="event__info">
                <dl>
                  <dd> Coach : YYY </dd>
                  <dd>
                    Adresse:
                    <LocationOnIcon id="icon-loc" />
                    Monplaisir
                  </dd>
                  <dd>Email: mailyy@gmail.com</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailAnnoncePopUp;
