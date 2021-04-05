import React from "react";
import Carousel from "react-elastic-carousel";
import PubCard from "./PubCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function UserPubOrganized() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className="userPubOrganized">
      <div className="userPubOrganized__comingPub">
        <div className="comingPub-title">
          <h1>a venir</h1>
        </div>
        <div>
          <Carousel
            pagination={false}
            breakPoints={breakPoints}
            itemPadding={[0, 10]}
            className="pubCard-carousel"
          >
            <PubCard />
            <PubCard />
            <PubCard />
            <PubCard />

            <PubCard />
          </Carousel>
        </div>
      </div>
      <div className="userPubOrganized__passedPub">
        <div className="comingPub-title">
          <h1>passé</h1>
        </div>
        <Container>
          <Row xs={1} md={2} lg={2} className="justify-content-center">
            <Col xs={12} md={8}>
              <PubCard cclassName="xx" />
            </Col>
            <Col xs={12} md={8}>
              <PubCard />
            </Col>
            <Col xs={12} md={8}>
              <PubCard />
            </Col>
            <Col xs={12} md={8}>
              <PubCard />
            </Col>
            <Col xs={12} md={8}>
              <PubCard />
            </Col>
            <Col xs={12} md={8}>
              <PubCard />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default UserPubOrganized;
