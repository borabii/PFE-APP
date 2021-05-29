import React, { useContext, useState, useEffect, Fragment } from "react";
import PubCard from "./PubCard";
import Carousel from "react-elastic-carousel";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PubContext from "../../../Context/Publication/pubContext";
import Spinner from "../../layout/Spinner";

function UserPubParticipated() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  //app level state
  const pubContext = useContext(PubContext);
  const { pubsParticipated, loadActParticipated, loading } = pubContext;
  //componenet level state
  const [commingPubs, setCommingPubs] = useState([]);
  const [passedPubs, setPassedPubs] = useState([]);

  useEffect(() => {
    if (pubsParticipated) {
      setCommingPubs(
        pubsParticipated.filter(
          (item) =>
            new Date().setHours(0, 0, 0, 0) <=
              new Date(item.date_DebutPub).setHours(0, 0, 0, 0) &&
            new Date(item.date_DebutPub).getHours() > new Date().getHours()
        )
      );
      setPassedPubs(
        pubsParticipated.filter(
          (item) =>
            new Date().setHours(0, 0, 0, 0) >
            new Date(item.date_DebutPub).setHours(0, 0, 0, 0)
        )
      );
    }
  }, [pubsParticipated]);
  useEffect(() => {
    loadActParticipated();
  }, []);
  return (
    <Fragment>
      {pubsParticipated && !loading ? (
        <div className="userPubParticipated">
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
                {commingPubs.length > 0 ? (
                  commingPubs.map((item, index) => {
                    return (
                      <>
                        <PubCard
                          act={item}
                          key={index}
                          editPermission={false}
                        />
                      </>
                    );
                  })
                ) : (
                  <h1 id="emptyPubMSg">aucune activité a venir</h1>
                )}
              </Carousel>
            </div>
          </div>
          <div className="userPubOrganized__passedPub">
            <div className="comingPub-title">
              <h1>passé</h1>
            </div>
            <Container>
              <Row xs={1} md={2} lg={2} className="justify-content-center">
                {passedPubs.length > 0 ? (
                  passedPubs.map((item, index) => {
                    return (
                      <>
                        <Col xs={12} md={6} lg={6}>
                          <PubCard
                            act={item}
                            key={index}
                            editPermission={true}
                            editPermission={true}
                          />
                        </Col>
                      </>
                    );
                  })
                ) : (
                  <h1 id="emptyPubMSg">aucune activité a passé</h1>
                )}
              </Row>
            </Container>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
}

export default UserPubParticipated;
