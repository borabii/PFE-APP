import React from "react";
import Catégorie from "./Catégorie";
import TodayPub from "./TodayPub";

import ComingPub from "./ComingPub";
function Home() {
  return (
    <div>
      <div className="homePageBody-TodayPub">
        <h2>AUJOURD’HUI A PROXIMITÉ</h2>
        <TodayPub />
      </div>
      <div className="homePageBody-Catégorie">
        <h2>Catégorie</h2>
        <Catégorie />
      </div>
      <div className="homePageBody-ComingPub">
        <h2>A Venir</h2>
        <ComingPub />
      </div>
    </div>
  );
}

export default Home;
