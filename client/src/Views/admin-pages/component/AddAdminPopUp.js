import React from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
function AddAdminPopUp(props) {
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
          Ajouter admin{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addAdminPopUP">
          <form>
            <input type="text" placeholder=" Nom" />
            <input type="email" placeholder=" Email" />
            <input type=" number" placeholder=" Tel" />
            <Select
              isMulti
              name="colors"
              options={options}
              className="select"
              classNamePrefix="select"
            />
            <input type="password" placeholder=" Mots de passe" />
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

export default AddAdminPopUp;
