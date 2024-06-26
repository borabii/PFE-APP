import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import CatégorieCard from "./CatégorieCard";
import UserContext from "../../../Context/user/userContext";
function Catégorie() {
  const userContext = useContext(UserContext);
  const { fullCatégorieData } = userContext;
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 300, itemsToShow: 3 },
    { width: 500, itemsToShow: 4 },
    { width: 768, itemsToShow: 7 },
    { width: 1200, itemsToShow: 10 },
  ];

  return (
    <Carousel
      pagination={false}
      itemPadding={[0, 10]}
      breakPoints={breakPoints}
      className="CatégorieCard-carousel"
    >
      {fullCatégorieData &&
        fullCatégorieData.map((item, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            key={index}
          >
            <CatégorieCard data={item} />
            <p style={{ alignSelf: "center" }}>{item.typeCatégorie}</p>
          </div>
        ))}
    </Carousel>
  );
}

export default Catégorie;
