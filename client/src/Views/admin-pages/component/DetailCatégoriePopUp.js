import React from "react";
import Modal from "react-bootstrap/Modal";

function DetailCatégoriePopUp(props) {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Détail Catégorie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="detailCattégoriePopUp">
            <div className="popupBody__top">
              <div className="catégorie__container ">
                <p>
                  <h5>Nom:</h5> 20/03/2021
                </p>
                <p>
                  <h5>Date Création:</h5> 20/03/2021
                </p>

                <h5>Photo:</h5>
                <div className="img__holder">image holder</div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailCatégoriePopUp;
