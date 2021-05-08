import React from "react";
import Modal from "react-bootstrap/Modal";

function AnnonceurWorktimePopUp(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Temps de travail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="annonceurWorktimePopUp">
          <table className="worktime">
            <tr>
              <th>Lundi</th>
              <td> 07:00</td>
              <td>21:00</td>
            </tr>
            <tr>
              <th>Mardi</th>
              <td> 07:00</td>
              <td>21:00</td>
            </tr>
            <tr>
              <th>Mercreudi</th>
              <td> 07:00</td>
              <td>21:00</td>
            </tr>
            <tr>
              <th>Vendredi</th>
              <td> 07:00</td>
              <td>21:00</td>
            </tr>
            <tr>
              <th>Samedi</th>
              <td> 08:00</td>
              <td>16:00</td>
            </tr>
            <tr>
              <th>Dimanche</th>
              <td> 08:00</td>
              <td>16:00</td>
            </tr>
          </table>
        </div>
        <div className="demande__action">
          <form className="demande__form">
            <button id="accept__btn">Ajouter</button>
            <button id="refuse__btn">Refuser</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AnnonceurWorktimePopUp;
