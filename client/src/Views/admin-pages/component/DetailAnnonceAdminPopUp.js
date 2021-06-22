import React from "react";
import Modal from "react-bootstrap/Modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { getTime, getDate } from "../../../utilis/date";
function DetailAnnonceAdminPopUp(props) {
  const { categorie, description, date_Pub } = props.data;
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
                <dd>{categorie}</dd>

                <dt>Date Publication </dt>
                <dd>
                  {" "}
                  Le {getDate(date_Pub)} à {getTime(date_Pub)}
                </dd>

                <dt>Description</dt>
                <dd>{description}</dd>
              </dl>
            </div>
          </div>

          <div className="detailAnnonce__bottom">
            <h3>ORGANISER PAR</h3>
            {props.organisateur && (
              <div className="bottom__container">
                <img
                  src={`http://localhost:8000/${props.organisateur.imageCouverture}`}
                  alt=""
                />
                <div className="event__info">
                  <dl>
                    <dd> Annonceur :{props.organisateur.nomAnnonceur} </dd>
                    <dd>
                      Adresse:
                      <LocationOnIcon id="icon-loc" />
                      {/* {adress} */}
                    </dd>
                    <dd>Email:{props.organisateur.emailProAnnonceur} </dd>
                  </dl>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailAnnonceAdminPopUp;
