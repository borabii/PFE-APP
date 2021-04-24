import React from "react";
import "./AnnonceurStyle.css";
import AnnonceurVisitedProfile from "./component/AnnonceurVisitedProfile";
import AnnonceurWorktimePopUp from "./component/AnnonceurWorktimePopUp";

function AnnonceurHomePage() {
  return (
    <div className="annonceurHomePage">
      {/* <AnnonceurVisitedProfile /> */}
      <AnnonceurWorktimePopUp />
    </div>
  );
}

export default AnnonceurHomePage;
