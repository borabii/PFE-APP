import React from "react";
import Modal from "react-bootstrap/Modal";

function AddAddressPopUp(props) {
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
          Ajouter Localité
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addAdressPopUP">
          <form>
            <input type="text" placeholder=" Gouverorat" />
            <input type="text" placeholder=" Ville" />
            <button className="btn" type="submit">
              Modifier
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddAddressPopUp;
