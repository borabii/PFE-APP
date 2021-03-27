import React from "react";
import Modal from "react-bootstrap/Modal";

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
                <h5>Nom:</h5> 20/03/2021
              </p>
              <p>
                <h5>Email:</h5> 20/03/2021
              </p>
              <p>
                <h5>Date d'envoie:</h5> 20/03/2021
              </p>
              <h5>Message:</h5>
              <textarea
                rows="5"
                cols="50"
                name="description"
                value="zefzefzefzef"
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
