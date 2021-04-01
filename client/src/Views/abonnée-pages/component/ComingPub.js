import React from "react";
import PubCard from "./PubCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function ComingPub() {
  return (
    <div className="comingPub">
      <Container>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <PubCard />
          </Col>
          <Col>
            <PubCard />
          </Col>
          <Col>
            <PubCard />
          </Col>
          <Col>
            <PubCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ComingPub;
