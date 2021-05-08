import React from "react";
import "./Style.css";

import BoiteMessage from "./component/BoiteMessage";
import Dashboard from "./component/Dashboard";
import DemandeManagment from "./component/DemandeManagment";
import CategoryManagment from "./component/CategoryManagment";
import PublicationActivity from "./component/PublicationActivity";
import PublicationAnnonce from "./component/PublicationAnnonce";
import PublicationEvent from "./component/PublicationEvent";
import UserAbonné from "./component/UserAbonné";
import UserAnnonceur from "./component/UserAnnonceur";
import Reclamation from "./component/Reclamation";
import AdminManagment from "./component/AdminManagment";
import AdressManagment from "./component/AdressManagment";

import { SideBarData } from "./component/SideBarData";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import AdminNavbar from "./component/AdminNavbar";

function AdminHomePage() {
  const { url, path } = useRouteMatch();

  return (
    <div className="adminHomePage">
      <AdminNavbar />

      <div className="adminHomePage__container">
        <div className=" navbar adminHomePage__sidbar">
          <div className="sidbar__item">
            <ul>
              {/* get sid menu item from sideBarData */}
              {SideBarData.map((item, index) => {
                return (
                  <li className={item.cName} key={index}>
                    <Link to={`${url}${item.path}`} id="link-style">
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className=" container">
          <div className=" container  px-4  body-container">
            <Switch>
              <Route path={path} exact component={Dashboard} />

              <Route path={`${path}/boiteMessage`} component={BoiteMessage} />
              <Route
                path={`${path}/demandeManagment`}
                component={DemandeManagment}
              />
              <Route
                path={`${path}/categoryManagment`}
                component={CategoryManagment}
              />
              <Route
                path={`${path}/pubActivity`}
                component={PublicationActivity}
              />
              <Route
                path={`${path}/pubAnnonce`}
                component={PublicationAnnonce}
              />
              <Route path={`${path}/pubEvent`} component={PublicationEvent} />
              <Route path={`${path}/userAbonné`} component={UserAbonné} />
              <Route path={`${path}/userAnnonceur`} component={UserAnnonceur} />
              <Route path={`${path}/reclamation`} component={Reclamation} />
              <Route
                path={`${path}/adminManagment`}
                component={AdminManagment}
              />
              <Route
                path={`${path}/adressManagment`}
                component={AdressManagment}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
