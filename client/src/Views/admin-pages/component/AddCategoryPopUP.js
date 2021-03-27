import React from "react";
import Modal from "react-bootstrap/Modal";

function AddCategoryPopUP(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajouter Catégorie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addCategoryPopUP">
          <div className="img__holder">image holder</div>
          <form>
            <input type="file" accept="image/*" />
            <input type="text" placeholder=" Nom Catégorie" />
            <button className="btn" type="submit">
              Ajouter
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddCategoryPopUP;
