import React from "react";
import Carousel from "react-elastic-carousel";
import PubCard from "./PubCard";

function TodayPub() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div>
      <Carousel
        pagination={false}
        itemPadding={[0, 10]}
        breakPoints={breakPoints}
        className="pubCard-carousel"
      >
        {/* <PubCard />
        <PubCard />

        <PubCard />

        <PubCard />

        <PubCard /> */}
      </Carousel>
    </div>
  );
}

export default TodayPub;
