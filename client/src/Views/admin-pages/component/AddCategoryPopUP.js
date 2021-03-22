import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
function AddCategoryPopUP(props) {
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
        <div className="addCategoryPopUP">
          <h3>Ajouter Catégorie</h3>
          <div className="img__holder">image holder</div>
          <form>
            <input type="file" accept="image/*" />
            <input type="text" placeholder=" Nom Catégorie"></input>
            <button className="btn" type="submit">
              Ajouter
            </button>
          </form>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
       <button onClick={props.onHide}>Annuler</button>
     </Modal.Footer> */}
    </Modal>
  );
}

export default AddCategoryPopUP;
