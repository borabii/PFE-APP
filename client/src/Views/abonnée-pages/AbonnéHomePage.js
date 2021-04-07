import React from "react";
import "./AbonnéStyle.css";
import AboHeader from "./component/AboHeader";
import AbonnéProfil from "./component/AbonnéProfil";
import AbonnéVisitedProfile from "./component/AbonnéVisitedProfile";

import Home from "./component/Home";
import UserPubOrganized from "./component/UserPubOrganized";
import UserPubParticipated from "./component/UserPubParticipated";
function AbonnéHomePage() {
  return (
    <div>
      {/* header */}
      <AboHeader />

      {/* home body */}
      <div className="homePageBody">
        {/* <Home /> */}
        {/* <AbonnéVisitedProfile /> */}
        <UserPubOrganized />
        {/* <UserPubParticipated /> */}
        {/* <AbonnéProfil /> */}
      </div>
    </div>
  );
}

export default AbonnéHomePage;
