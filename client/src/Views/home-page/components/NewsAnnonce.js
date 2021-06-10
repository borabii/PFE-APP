import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-elastic-carousel";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import axios from "axios";
function NewsAnnonce() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [annonce, setAnnonce] = useState([]);
  const [adresse, setAdresse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Publication/landingPage/news/Annonce")
      .then((res) => setAnnonce(res.data));
    return () => {
      setAnnonce([]);
    };
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${props.act.adresse.coordinates[0]}&longitude=${props.act.adresse.coordinates[1]}&localityLanguage=fr`
  //     )
  //     .then((data) => setadresse(data.data));
  // }, [props.act, fullCatégorieData]);
  return (
    <div className="newsAnnonce">
      <Carousel
        pagination={false}
        itemPadding={[0, 5]}
        breakPoints={breakPoints}
      >
        {annonce &&
          annonce.map((item, index) => {
            return (
              <Card style={{ width: "18rem" }} className="news-card ">
                <Card.Img
                  variant="top"
                  className="news-img"
                  src={`http://localhost:8000/${item.image_url}`}
                />
                <Card.Body>
                  <Card.Title>{item.categorie}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    <LocationOnIcon id="news-locIcon" />
                    {adresse &&
                      adresse.locality +
                        "," +
                        adresse.principalSubdivision}{" "}
                  </Card.Subtitle>
                  <Card.Text
                    style={{
                      color: "black",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    {item.description}
                  </Card.Text>
                  <button className="cardBtn">Visiter</button>
                </Card.Body>
              </Card>
            );
          })}
      </Carousel>
    </div>
  );
}

export default NewsAnnonce;
