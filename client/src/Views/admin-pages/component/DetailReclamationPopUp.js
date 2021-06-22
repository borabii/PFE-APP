import React from "react";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
function DetailReclamationPopUp(props) {
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
          Détail Réclamation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailReclamationPopUps">
          <h4>Information de compte signalé</h4>
          {props.reportedUser.length > 0 && (
            <div className="popupBody__top">
              <div className="top__container">
                <div className="user__img">
                  <img
                    src={`http://localhost:8000/${props.reportedUser[0].imageProfile}`}
                    alt=""
                  />
                </div>
                <div className="user__Info">
                  <ul>
                    <li>
                      Nom:
                      {props.reportedUser[0].firstName}
                    </li>
                    <li>Prenom: {props.reportedUser[0].lastName}</li>
                    <li>Email: {props.reportedUser[0].email}</li>
                    <li>
                      Date inscription:{" "}
                      {moment(props.reportedUser[0].inscriDate).format(
                        "YYYY-MM-DD"
                      ) +
                        " à " +
                        moment(props.reportedUser[0].inscriDate).format(
                          "HH:mm"
                        )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <h4>Liste Réclamation</h4>
          <div className="reclamation-liste">
            {props.listeReclamation.map((item, index) => {
              return (
                <>
                  <div className="popupBody__middel">
                    <div className="middel__container ">
                      <div className="user__img">
                        <img
                          src={`http://localhost:8000/${item.user.imageProfile}`}
                          alt=""
                        />
                      </div>
                      <div className="user__Info">
                        <ul>
                          <li>Nom:{item.user.firstName} </li>
                          <li>Prénom:{item.user.lastName} </li>
                          <li>Cause:{item.cause}</li>
                          <li>
                            Date de signale:
                            {moment(item.reportDate).format("YYYY-MM-DD") +
                              " à " +
                              moment(item.reportDate).format("HH:mm")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailReclamationPopUp;
