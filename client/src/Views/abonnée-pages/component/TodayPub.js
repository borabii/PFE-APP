import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import PubCard from "./PubCard";
import PubDetailPopUp from "../component/PubDetailPopup";
import axios from "axios";
function TodayPub(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  //component level state
  const [eventClicked, setEventClicked] = useState({});
  const [editEventModalShow, setEditEventModalShow] = useState(false);
  const [pubOrganisateur, setPubOrganisateur] = useState({});

  //this methode used for handel user click in which event card
  const handleDetailClick = (e, item) => {
    setEventClicked(item);
    setEditEventModalShow(true);
    if (item.typePub == "Activity") {
      axios
        .get(`http://localhost:8000/api/users/Admin/getDemandeur/${item.user}`)
        .then((res) => setPubOrganisateur(res.data));
    } else
      axios
        .get(`http://localhost:8000/api/users/Admin/getAnnonceur/${item.user}`)
        .then((res) => setPubOrganisateur(res.data));
  };
  return (
    <div>
      <Carousel
        pagination={false}
        itemPadding={[0, 10]}
        breakPoints={breakPoints}
        className="pubCard-carousel"
      >
        {props.pubs.length > 0 ? (
          props.pubs.map((item, index) => {
            return (
              <PubCard
                editPubOption={false}
                editPermission={false}
                act={item}
                key={index}
                detailOnClickIcon={(e) => handleDetailClick(e, item)}
              />
            );
          })
        ) : (
          <h1 id="emptyPubMSg">aucune activité a venir</h1>
        )}
      </Carousel>

      <PubDetailPopUp
        show={editEventModalShow}
        data={eventClicked}
        user={pubOrganisateur}
        onHide={() => setEditEventModalShow(false)}
        participat={true}
      />
    </div>
  );
}

export default TodayPub;
