import React, { useEffect, useContext } from "react";
import Home from "../annonceur-page/Componenet/Home";
import "./AnnonceurStyle.css";
import AnnonceurVisitedProfile from "./Componenet/AnnonceurVisitedProfile";
import AnnonceurWorkTimePopUp from "./Componenet/AnnonceurWorkTimePopUp";

function AnnonceurHomePage() {
  return (
    <div>
      <Home />
      {/* <AnnonceurVisitedProfile /> */}
      {/* <AnnonceurWorkTimePopUp /> */}
    </div>
  );
}

export default AnnonceurHomePage;
