import React from "react";
import Modal from "react-bootstrap/Modal";

function EditAdminPopUp(props) {
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
          Modifier admin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="editAdminPopUP">
          <form>
            <input type="text" placeholder=" Permission" />
            <input type="password" placeholder=" Mots de passe" />
            <button className="btn" type="submit">
              Modifier
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

export default EditAdminPopUp;
