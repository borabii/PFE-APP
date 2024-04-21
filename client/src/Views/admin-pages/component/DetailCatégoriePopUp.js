import React from "react";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

function DetailCatégoriePopUp(props) {
  const { typeCatégorie, imageCatégorie, addDate } = props.categorie;

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
                  <h5>Nom:</h5> {typeCatégorie}
                </p>
                <p>
                  <h5>Date Création:</h5>{" "}
                  {moment(addDate).format("YYYY-MM-DD") +
                    " à " +
                    moment(addDate).format("HH:mm")}
                </p>

                <h5>Photo:</h5>
                <div className="img__holder">
                  <img src={`http://localhost:8000/${imageCatégorie}`}></img>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailCatégoriePopUp;
