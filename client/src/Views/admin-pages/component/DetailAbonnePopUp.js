import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { calucleAge, getDate } from "../../../utilis/date";
function DetailAbonnePopUp(props) {
  const [nbrAct, setnbrAct] = useState({});
  const {
    firstName,
    lastName,
    email,
    inscriDate,
    imageProfile,
    dateOfBirth,
    centreInteret,
    userScore,
  } = props.user;
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/Publication/Admin/getNumberAct/${props.user._id}`
      )
      .then((response) => setnbrAct(response.data));
  }, [props.show]);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Détail Abonné
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailReclamationPopUps" id="dd">
          <div className="popupBody__top">
            <h4>Information Personnelle</h4>
            <div className="top__container">
              <div className="user__img">
                <img src={`http://localhost:8000/${imageProfile}`} alt="" />
              </div>
              <div className="user__Info">
                <ul>
                  <li>Nom : {firstName}</li>
                  <li>Prénom: {lastName} </li>
                  <li> Age: {calucleAge(dateOfBirth)} ans </li>
                  <li>Email: {email} </li>
                  <li>Date d'inscrit: {getDate(inscriDate)} </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="popupBody__bottom">
            <h4> Historique</h4>
            <div className="detail__account">
              <div className="info-item">
                <h6>Nombre Abonnés</h6>
                <h6>
                  {typeof props.user.following !== "undefined" &&
                  props.user.following.length
                    ? props.user.following.length
                    : "0"}
                </h6>
              </div>
              <div className="info-item">
                <h6> Avis</h6>
                <h6>{nbrAct.totalRate !== null ? nbrAct.totalRate : "0"}</h6>
              </div>

              <div className="info-item">
                <h6> nombre d'activités</h6>
                <h6>{nbrAct.nbrAct}</h6>
              </div>

              <div className="info-item">
                <h6> Score Globale</h6>
                <h6>{userScore}</h6>
              </div>
            </div>
            <div className="user__interet">
              <h4>centre d'Interet</h4>
              <Container className="interet__categorie">
                <Row xs={2} md={2} lg={4}>
                  {centreInteret &&
                    centreInteret.map((item, index) => {
                      return (
                        <Col xs={6} md={6} lg={3}>
                          <div id="cat" key={index}>
                            {item}
                          </div>
                        </Col>
                      );
                    })}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetailAbonnePopUp;
