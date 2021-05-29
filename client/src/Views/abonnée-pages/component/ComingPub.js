import React, { useState } from "react";
import PubCard from "./PubCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import PubDetailPopUp from "../../abonnée-pages/component/PubDetailPopup";
function ComingPub(props) {
  const [eventClicked, setEventClicked] = useState({});
  const [org, setorg] = useState({});
  const [editEventModalShow, setEditEventModalShow] = useState(false);
  //this methode used for handel user click in which event card
  const handleDetailClick = (e, item) => {
    setEventClicked(item);
    setEditEventModalShow(true);
    axios
      .get(`http://localhost:8000/api/users/Admin/getDemandeur/${item.user}`)
      .then((res) => setorg(res.data));
  };
  return (
    <div className="comingPub">
      <Container>
        <Row xs={1} md={2} lg={2}>
          {props.pubs.length > 0 ? (
            props.pubs.map((item, index) => {
              return (
                <Col>
                  <PubCard
                    editPubOption={false}
                    editPermission={false}
                    act={item}
                    key={index}
                    // deleteOnClick={() => deletePub(item._id)}
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
      <PubDetailPopUp
        show={editEventModalShow}
        data={eventClicked}
        user={org}
        onHide={() => setEditEventModalShow(false)}
      />
    </div>
  );
}

export default ComingPub;
