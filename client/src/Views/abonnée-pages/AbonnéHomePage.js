import React, { useContext, useEffect } from "react";
import "./AbonnéStyle.css";
import AboHeader from "./component/AboHeader";
import AbonnéProfil from "./component/AbonnéProfil";
import AbonnéVisitedProfile from "./component/AbonnéVisitedProfile";
import AnnonceurHomePage from "../annonceur-page/AnnonceurHomePage";
import Home from "./component/Home";
import UserPubOrganized from "./component/UserPubOrganized";
import UserPubParticipated from "./component/UserPubParticipated";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import FormDemandeEscpacePubs from "./component/FormDemandeEscpacePubs";
import AuthContext from "../../Context/auth/authContext";
function AbonnéHomePage() {
  const { path } = useRouteMatch();
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);
  return (
    // <FormDemandeEscpacePubs/>
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
          <Route path={`${path}/EscpacePub`} component={AnnonceurHomePage} />
          <Route
            path={`${path}/FormDemandeEscpacePubs`}
            component={FormDemandeEscpacePubs}
          />
        </Switch>
      </div>
    </div>
  );
}

export default AbonnéHomePage;
