import React, { useContext } from "react";
import AbonnéInfo from "./AbonnéInfo";
import AbonneNote from "./AbonneNote.js";
import AbonnéCenterOfInterest from "./AbonnéCenterOfInterest";
import AbonnéSearchParametre from "./AbonnéSearchParametre";
import AuthContext from "../../../Context/auth/authContext";

import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
function AbonnéProfil() {
  const { url, path } = useRouteMatch();
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <div className="profileAbonne">
      <div className="AboneéSide-menu">
        <ul>
          <li>
            <NavLink to={`${url}`}>Mes information </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={`${url}/MesInteret`}>Mes centre d'interet</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={`${url}/MesNote`}>
              Mes centre Mes notes et avis'interet
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={`${url}/MesParametreDeRecherche`}>
              Parametre de recherche{user.email}
            </NavLink>
          </li>
          {/* <li>
            <NavLink to={`${url}/MesNote`}>Modifier ma localisation</NavLink>{" "}
          </li> */}
        </ul>
      </div>
      <div className="AboneéSide-menuSmallDevice">
        <span>Information </span>
        <span>Intérêt</span>
        <span>Avis</span>
        <span>Recherche</span>
        <span>Localisation</span>
      </div>
      <div className="profileAbonné-body">
        <Switch>
          <Route path={`${path}/MesNote`} component={AbonneNote} />
          <Route
            path={`${path}/MesParametreDeRecherche`}
            component={AbonnéSearchParametre}
          />
          <Route
            path={`${path}/MesInteret`}
            component={AbonnéCenterOfInterest}
          />
          <Route exact path={`${path}`} component={AbonnéInfo} />
        </Switch>
      </div>
    </div>
  );
}

export default AbonnéProfil;
