import React from "react";
import "./AbonnéStyle.css";
import AboHeader from "./component/AboHeader";
import AbonnéProfil from "./component/AbonnéProfil";
import AbonnéVisitedProfile from "./component/AbonnéVisitedProfile";

import Home from "./component/Home";
import UserPubOrganized from "./component/UserPubOrganized";
import UserPubParticipated from "./component/UserPubParticipated";
import { Route, Switch, useRouteMatch } from "react-router-dom";

function AbonnéHomePage() {
  const { path } = useRouteMatch();

  return (
    <div>
      <AboHeader />
      <div className="homePageBody">
        <Switch>
          <Route path={path} exact component={Home} />
          <Route
            path={`${path}/MesActivités`}
            component={UserPubParticipated}
          />
          <Route path={`${path}/Compte`} component={AbonnéProfil} />
        </Switch>
      </div>
    </div>
  );
}

export default AbonnéHomePage;
