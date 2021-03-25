import React from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";

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
            <Select
              isMulti
              defaultValue={props.defaultValue}
              name="colors"
              options={props.options}
              className="select"
              classNamePrefix="select"
            />
            <button className="btn" type="submit">
              Modifier
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditAdminPopUp;
