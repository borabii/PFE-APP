import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import AnnonceCard from "../../annonceur-page/Componenet/AnnonceCard";
import ViewAnnoncePopUp from "../../annonceur-page/Componenet/ViewAnnoncePopUp";
import axios from "axios";
function TodayAnnonce(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  //component level state
  const [modalShow, setModalShow] = useState(false);
  const [eventClicked, setEventClicked] = useState({});
  const [data, SetData] = useState({});
  //
  const handleDetailAnnonceCardClick = (e, item) => {
    setEventClicked(item);
    axios
      .get(`http://localhost:8000/api/users/Admin/getAnnonceur/${item.user}`)
      .then((response) => {
        SetData(response.data);
        setModalShow(true);
      });
  };
  console.log(modalShow);
  return (
    <Carousel
      pagination={false}
      itemPadding={[0, 10]}
      breakPoints={breakPoints}
      className="CatégorieCard-carousel"
    >
      {props.data.length > 0 ? (
        props.data.map((item, index) => {
          return (
            <AnnonceCard
              key={index}
              annonceData={item}
              editPubOption={false}
              detailOnClickIcon={(e) => handleDetailAnnonceCardClick(e, item)}
            />
          );
        })
      ) : (
        <h1 id="emptyPubMSg">aucune activité a venir</h1>
      )}

      <ViewAnnoncePopUp
        show={modalShow}
        data={eventClicked}
        user={data}
        onHide={() => setModalShow(false)}
      />
    </Carousel>
  );
}

export default TodayAnnonce;
