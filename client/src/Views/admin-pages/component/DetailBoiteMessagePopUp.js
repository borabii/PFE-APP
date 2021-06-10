import React from "react";
import Modal from "react-bootstrap/Modal";
import { getDate, getTime } from "../../../utilis/date";
function DetailBoiteMessage(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailBoiteMessagePopUps">
          <div className="popupBody__bottom">
            <div className="boite__container ">
              <p>
                <span>Nom:</span>
                {props.message.nom}
              </p>
              <p>
                <span>Email:</span>
                {props.message.email}
              </p>
              <p>
                <span>Date d'envoie:</span>
                {getDate(props.message.DateEnvoie)}
              </p>
              <p>
                <span>Message:</span>
              </p>
              <textarea
                rows="5"
                cols="50"
                name="description"
                value={props.message.message}
                readOnly
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailBoiteMessage;
