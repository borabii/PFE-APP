import React from "react";
import Select from "react-select";
import CatégorieCard from "./CatégorieCard.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function AbonnéCenterOfInterest() {
  const options = [
    { value: "football", label: "football" },
    { value: "fifa", label: "fifa" },
    { value: "handball", label: "handball" },
  ];
  return (
    <div className="abonneIntert">
      <div className="abonneIntert__top">
        <Select options={options} />
      </div>
      <h2> Mes centre d'intérêt </h2>

      <div className="abonneIntert__bottom">
        <Container>
          <Row xs={3} md={3} lg={8}>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
            <Col>
              <CatégorieCard />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AbonnéCenterOfInterest;
