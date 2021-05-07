import React from "react";
import Modal from "react-bootstrap/Modal";

function AddAnnoncePopUp(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Publier Annonce
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="EditWorktimePopUp">
            <div className="edit__action">
              <button id="edit__btn">Publier</button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddAnnoncePopUp;
