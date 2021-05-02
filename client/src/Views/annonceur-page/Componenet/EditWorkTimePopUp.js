import React from "react";
import Modal from "react-bootstrap/Modal";

function EditWorktimePopUp(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mes Horaires
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="EditWorktimePopUp">
            <div className="workTimeOption">
              <h2>Dimanche</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Lundi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Mardi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Mercredi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Jeudi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Vendredi</h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="workTimeOption">
              <h2>Samedi </h2>
              <div className="TimeValue">
                <input type="time" />
                <input type="time" />
              </div>
            </div>
            <div className="edit__action">
              <button id="edit__btn">Modifier</button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditWorktimePopUp;
