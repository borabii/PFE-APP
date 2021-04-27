import React from "react";
import AbonnéInfo from "./AbonnéInfo";
import AbonneNote from "./AbonneNote.js";
import AbonnéCenterOfInterest from "./AbonnéCenterOfInterest";
import AbonnéSearchParametre from "./AbonnéSearchParametre";
import InfoIcon from "@material-ui/icons/Info";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
function AbonnéProfil() {
  const { url, path } = useRouteMatch();

  return (
    <div className="profileAbonne">
      <div className="AboneéSide-menu">
        <div className="menu-item">
          <NavLink
            exact
            to={`${url}`}
            className="item"
            activeClassName="selected"
          >
            <span>
              <InfoIcon id="profileSidMenu-icon" />
              Information
            </span>
          </NavLink>{" "}
          <NavLink
            to={`${url}/MesInteret`}
            className="item"
            activeClassName="selected"
          >
            {" "}
            <span>
              <LocalActivityIcon id="profileSidMenu-icon" /> Centre d'intérêt
            </span>
          </NavLink>{" "}
          <NavLink
            to={`${url}/MesNotes`}
            className="item"
            activeClassName="selected"
          >
            <span>
              <ThumbUpAltIcon id="profileSidMenu-icon" /> Notes et Avis
            </span>
          </NavLink>{" "}
          <NavLink
            to={`${url}/MesParametreDeRecherche`}
            activeClassName="selected"
            className="item"
          >
            <span>
              <MyLocationIcon id="profileSidMenu-icon" />
              Paramètre de recherche
            </span>
          </NavLink>
        </div>
        {/* <li>
            <NavLink to={`${url}/MesNote`}>Modifier ma localisation</NavLink>{" "}
          </li> */}
      </div>
      <div className="AboneéSide-menuSmallDevice">
        <div className="menu-itemSmall-Dev">
          <NavLink
            className="item-smallDevice"
            exact
            to={`${url}`}
            activeStyle={{
              fontWeight: "bold",
              color: "#44C9BB",
            }}
          >
            Information
          </NavLink>{" "}
          <NavLink
            to={`${url}/MesInteret`}
            className="item-smallDevice"
            activeStyle={{
              fontWeight: "bold",
              color: "#44C9BB",
            }}
          >
            Intérêt
          </NavLink>
          <NavLink
            to={`${url}/MesNotes`}
            className="item-smallDevice"
            activeStyle={{
              fontWeight: "bold",
              color: "#44C9BB",
            }}
          >
            Avis
          </NavLink>
          <NavLink
            to={`${url}/MesParametreDeRecherche`}
            className="item-smallDevice"
            activeStyle={{
              fontWeight: "bold",
              color: "#44C9BB",
            }}
          >
            Recherche
          </NavLink>
          <span>Localisation</span>
        </div>
      </div>
      <div className="profileAbonné-body">
        <Switch>
          <Route path={`${path}/MesNotes`} component={AbonneNote} />
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
