import React, { useEffect, useContext } from "react";
import "./AbonnéStyle.css";
import AboHeader from "./component/AboHeader";
import AbonnéProfil from "./component/AbonnéProfil";
import AbonnéVisitedProfile from "./component/AbonnéVisitedProfile";

import Home from "./component/Home";
import UserPubOrganized from "./component/UserPubOrganized";
import UserPubParticipated from "./component/UserPubParticipated";
import AuthContext from "../../Context/auth/authContext";
import { Router, Route, Switch } from "react-router-dom";

function AbonnéHomePage() {
  const authContext = useContext(AuthContext);
  //app level state
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div>
      {/* header */}
      <AboHeader />

      {/* home body */}
      <div className="homePageBody">
        <Home />

        {/* <AbonnéVisitedProfile /> */}
        {/* <UserPubOrganized /> */}
        {/* <UserPubParticipated /> */}
        {/* <AbonnéProfil /> */}
      </div>
    </div>
  );
}

export default AbonnéHomePage;
