import React from "react";
import Carousel from "react-elastic-carousel";
import CatégorieCard from "./CatégorieCard";

function Catégorie() {
  const breakPoints = [
    { width: 1, itemsToShow: 4, showArrows: true },
    { width: 500, itemsToShow: 4 },
    { width: 768, itemsToShow: 7 },
    { width: 1200, itemsToShow: 10 },
  ];
  return (
    <div>
      <Carousel
        pagination={false}
        itemPadding={[0, 5]}
        breakPoints={breakPoints}
        className="CatégorieCard-carousel"
      >
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />

        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />

        <CatégorieCard />
        <CatégorieCard />
        <CatégorieCard />
      </Carousel>
    </div>
  );
}

export default Catégorie;
