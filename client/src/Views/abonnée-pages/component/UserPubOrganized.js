import React, { useState, useContext, useEffect, Fragment } from "react";
import Carousel from "react-elastic-carousel";
import PubCard from "./PubCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import PubContext from "../../../Context/Publication/pubContext";
import EditActPopUp from "./EditActPopUp";
import Spinner from "../../layout/Spinner";
import ManagePubModalShow from "./ManagePubModalShow";

function UserPubOrganized() {
  //componenet level state
  const [commingPubs, setCommingPubs] = useState([]);
  const [passedPubs, setPassedPubs] = useState([]);

  //carousel parms
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  //app level state
  const pubContext = useContext(PubContext);
  const { loadActOrganized, pubsOrganized, loading, deletePub } = pubContext;
  useEffect(() => {
    loadActOrganized();
  }, []);
  useEffect(() => {
    if (pubsOrganized) {
      setCommingPubs(
        pubsOrganized.filter(
          (item) =>
            new Date().setHours(0, 0, 0, 0) <=
            new Date(item.date_DebutPub).setHours(0, 0, 0, 0)
        )
      );
      setPassedPubs(
        pubsOrganized.filter(
          (item) =>
            new Date().setHours(0, 0, 0, 0) >
            new Date(item.date_DebutPub).setHours(0, 0, 0, 0)
        )
      );
    }
    return () => {
      setCommingPubs([]);
      setPassedPubs([]);
    };
  }, [pubsOrganized]);
  //component level state
  const [editEventModalShow, setEditEventModalShow] = useState(false);
  const [eventClicked, setEventClicked] = useState({});
  const [manageEventModalShow, setManageEventModalShow] = useState(false);
  //
  const handleEditClick = (e, data) => {
    setEventClicked(data);
    setEditEventModalShow(true);
  };
  //this methode used for handel user click in which event card
  const handleDetailClick = (e, item) => {
    setEventClicked(item);
    setManageEventModalShow(true);
  };
  return (
    <Fragment>
      {pubsOrganized && !loading ? (
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
                {commingPubs.length > 0 ? (
                  commingPubs.map((item, index) => {
                    return (
                      <>
                        <PubCard
                          editPubOption={true}
                          act={item}
                          key={index}
                          editOnClick={(e) => handleEditClick(e, item)}
                          detailOnClickIcon={(e) => handleDetailClick(e, item)}
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
            <Container fluid className="noPaddingPubCard">
              <Row
                xs={1}
                sm={2}
                md={2}
                lg={3}
                className="justify-content-center"
              >
                {passedPubs.length > 0 ? (
                  passedPubs.map((item, index) => {
                    return (
                      <Col xs={12} sm={6} md={6} lg={4}>
                        <PubCard
                          editPubOption={false}
                          act={item}
                          key={index}
                          deleteOnClick={() => deletePub(item._id)}
                          detailOnClickIcon={(e) => handleDetailClick(e, item)}
                        />
                      </Col>
                    );
                  })
                ) : (
                  <h1 id="emptyPubMSg">aucune activité a venir</h1>
                )}
              </Row>
            </Container>
            <EditActPopUp
              show={editEventModalShow}
              actDetail={eventClicked}
              onHide={() => setEditEventModalShow(false)}
            />
            <ManagePubModalShow
              show={manageEventModalShow}
              data={eventClicked}
              onHide={() => setManageEventModalShow(false)}
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
}

export default UserPubOrganized;
