import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-elastic-carousel";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import axios from "axios";
import UserContext from "../../../Context/user/userContext";

function NewsActivity() {
  //app level state(user context)
  const userContext = useContext(UserContext);
  const { fullCatégorieData, getCatégorie } = userContext;
  useEffect(() => {
    getCatégorie();
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [activité, setActivité] = useState([]);
  const [adresse, setAdresse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Publication/landingPage/news/Annonce")
      .then((res) => setActivité(res.data));
    return () => {
      setActivité([]);
    };
  }, []);
  const getCatImage = (catégorie) => {
    let image = {};
    if (fullCatégorieData !== null) {
      image = fullCatégorieData.filter((item) =>
        catégorie.includes(item.typeCatégorie)
      )[0];
    }
    return image.imageCatégorie;
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${props.act.adresse.coordinates[0]}&longitude=${props.act.adresse.coordinates[1]}&localityLanguage=fr`
  //     )
  //     .then((data) => setadresse(data.data));
  // }, [props.act, fullCatégorieData]);
  return (
    <div className="newsActivity">
      <Carousel
        pagination={false}
        itemPadding={[0, 5]}
        breakPoints={breakPoints}
        className="xxx"
      >
        {activité &&
          activité.map((item, index) => {
            return (
              <Card style={{ width: "18rem" }} className="news-card ">
                <Card.Img
                  variant="top"
                  className="news-img"
                  src={`http://localhost:8000/${getCatImage(item.categorie)}`}
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
                  <button className="cardBtn">Participer</button>
                </Card.Body>
              </Card>
            );
          })}
      </Carousel>
    </div>
  );
}

export default NewsActivity;
