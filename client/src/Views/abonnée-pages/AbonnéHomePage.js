import React, { useContext, useEffect } from "react";
import "./AbonnéStyle.css";
import AboHeader from "./component/AboHeader";
import AbonnéProfil from "./component/AbonnéProfil";
import AbonnéVisitedProfile from "./component/AbonnéVisitedProfile";
import AnnonceurHomePage from "../annonceur-page/AnnonceurHomePage";
import Home from "./component/Home";
import Map from "./component/Map";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import FormDemandeEscpacePubs from "./component/FormDemandeEscpacePubs";
import AuthContext from "../../Context/auth/authContext";
import UserContext from "../../Context/user/userContext";
import AbonnéActivités from "./component/AbonnéActivités";
function AbonnéHomePage() {
  const { path } = useRouteMatch();
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated } = authContext;
  const userContext = useContext(UserContext);
  //app level state
  const { getCatégorie } = userContext;

  useEffect(() => {
    getCatégorie();
    loadUser();
  }, [isAuthenticated]);
  return (
    <div>
      <AboHeader />

      <Switch>
        <Route path={`${path}/Map`} exact component={Map} />
      </Switch>

      <Switch>
        <div className="homePageBody">
          <Route path={path} exact component={Home} />
          <Route path={`${path}/MesActivités`} component={AbonnéActivités} />
          <Route path={`${path}/Compte`} component={AbonnéProfil} />
          <Route path={`${path}/EscpacePub`} component={AnnonceurHomePage} />
          <Route
            path={`${path}/FormDemandeEscpacePubs`}
            component={FormDemandeEscpacePubs}
          />
          <Route
            path={`${path}/AbonnéProfile/:id`}
            component={AbonnéVisitedProfile}
          />
          {/* <Route
            path={`${path}/AnnonceurProfile/:id`}
            component={AnnonceurVisitedProfile}
          /> */}
        </div>
      </Switch>
    </div>
  );
}

export default AbonnéHomePage;
