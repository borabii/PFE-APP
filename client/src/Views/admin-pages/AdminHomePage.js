import React, { useContext, useEffect, useState } from "react";
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

import { SideBarData } from "./component/SideBarData";
import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
import AdminNavbar from "./component/AdminNavbar";
import AuthContext from "../../Context/auth/authContext";
function AdminHomePage() {
  const { url, path } = useRouteMatch();
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (user.role === "Super Admin") {
      return setResult(SideBarData);
    } else {
      return setResult(
        SideBarData.filter((item) => item.permission === user.permission)
      );
    }
  }, [user]);
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="adminHomePage">
      <AdminNavbar />
      <div className="adminHomePage__container">
        <div className=" navbar px-0  adminHomePage__sidbar">
          <div className="sidbar__item">
            {/* get sid menu item from sideBarData */}
            <NavLink
              to={path}
              exact
              activeClassName="selected-admin"
              id="link-style"
            >
              <span id="sidebar-itemTitle">Dashborad</span>
            </NavLink>
            {result.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={`${url}${item.path}`}
                  exact
                  activeClassName="selected-admin"
                  id="link-style"
                >
                  <span id="sidebar-itemTitle">{item.title}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className=" container">
          <div className=" container  px-4  body-container">
            <Switch>
              <Route path={`${path}`} exact component={Dashboard} />

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
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
