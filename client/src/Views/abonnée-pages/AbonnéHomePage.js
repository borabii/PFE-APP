import React from "react";
import "./AbonnéStyle.css";
import AboHeader from "./component/AboHeader";
import AboSidMenu from "./component/AboSidMenu";
import Catégorie from "./component/Catégorie";
import CatégorieCard from "./component/CatégorieCard";
import ComingPub from "./component/ComingPub";
import PubCard from "./component/PubCard";
import TodayPub from "./component/TodayPub";
function AbonnéHomePage() {
  return (
    <div>
      {/* header */}
      <AboHeader />
      {/* sidmenu */}
      {/* <AboSidMenu /> */}
      {/* home body */}
      <div className="homePageBody">
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
      {/* <PubCard /> */}
    </div>
  );
}

export default AbonnéHomePage;
