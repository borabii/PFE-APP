// import React from "react";
// import Modal from "react-bootstrap/Modal";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// function DetailAbonnePopUp(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       animation={true}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Détail Abonné
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="detailReclamationPopUps">
//           <div className="popupBody__top">
//             <h4>Information Personnelle</h4>
//             <div className="top__container">
//               <div className="user__img">
//                 <img
//                   src="data:image/jpeg;base64,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"
//                   alt=""
//                 />
//               </div>
//               <div className="user__Info">
//                 <ul>
//                   <li>Nom: test test</li>
//                   <li>Prénom: foot</li>
//                   <li>Age:</li>
//                   <li>Email: </li>
//                   <li>Date inscription:</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="popupBody__bottom">
//             <h4> Historique</h4>
//             <div className="detail__account">
//               <div className="info-item">
//                 <h6>Nombre Abonnés</h6>
//                 <h6>354</h6>
//               </div>
//               <div className="info-item">
//                 <h6> Avis</h6>
//                 <h6>354</h6>
//               </div>

//               <div className="info-item">
//                 <h6> nombre d'activités</h6>
//                 <h6>354</h6>
//               </div>

//               <div className="info-item">
//                 <h6> Score Globale</h6>
//                 <h6>354</h6>
//               </div>
//             </div>
//             <div className="user__interet">
//               <h4>centre d'Interet</h4>
//               <Container className="interet__categorie">
//                 <Row xs={2} md={4} lg={6}>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                   <Col>
//                     <div id="cat">football</div>
//                   </Col>
//                 </Row>
//               </Container>
//             </div>
//           </div>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }

// export default DetailAbonnePopUp;

import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function DetailAbonnePopUp(props) {
  const {
    firstName,
    lastName,
    email,
    inscriDate,
    imageProfile,
    dateOfBirth,
  } = props.user;

  const calucleAge = (date) => {
    let dob = new Date(date);
    //calculate month difference from current date in time
    let month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    let age_dt = new Date(month_diff);

    //extract year from date
    let year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    let age = Math.abs(year - 1970);
    return age;
  };
  return (
    <Modal
      {...props}
      size="lg"
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
                  <li>Date d'inscrit: {inscriDate} </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="popupBody__bottom">
            <h4> Historique</h4>
            <div className="detail__account">
              <div className="info-item">
                <h6>Nombre Abonnés</h6>
                <h6>354</h6>
              </div>
              <div className="info-item">
                <h6> Avis</h6>
                <h6>354</h6>
              </div>

              <div className="info-item">
                <h6> nombre d'activités</h6>
                <h6>354</h6>
              </div>

              <div className="info-item">
                <h6> Score Globale</h6>
                <h6>354</h6>
              </div>
            </div>
            <div className="user__interet">
              <h4>centre d'Interet</h4>
              <Container className="interet__categorie">
                <Row xs={2} md={4} lg={6}>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
                  <Col>
                    <div id="cat">football</div>
                  </Col>
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
