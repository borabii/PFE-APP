import React from "react";
import "./Style.css";
// React Clock for real time display
import Clock from "react-live-clock";

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
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function AdminHomePage() {
  return (
    <div className="adminHomePage">
      <div className=" navbar adminHomePage__navbar">
        <div className=" nav__option">
          <h2>Welcome Admin</h2>
        </div>
        <div className="nav__option clock">
          {/* displaying system time for user ( set ticking to true for auto upadate each second) */}
          <Clock format={"HH:mm:ss"} ticking={true} />
        </div>
        <div className="nav__option">
          <Link to="/">
            <button className="logoutBtn">
              <p>déconnexion</p>
            </button>
          </Link>
        </div>
      </div>
      <Router>
        <div className="adminHomePage__container">
          <div className=" navbar adminHomePage__sidbar">
            <div className="sidbar__item">
              <ul>
                {/* get sid menu item from sideBarData */}
                {SideBarData.map((item, index) => {
                  return (
                    <li className={item.cName} key={index}>
                      <Link to={item.path} id="link-style">
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
                <Route path="/boiteMessage">
                  <BoiteMessage />
                </Route>
                <Route path="/demandeManagment">
                  <DemandeManagment />
                </Route>
                <Route path="/categoryManagment">
                  <CategoryManagment />
                </Route>
                <Route path="/pubActivity">
                  <PublicationActivity />
                </Route>
                <Route path="/pubAnnonce">
                  <PublicationAnnonce />
                </Route>
                <Route path="/pubEvent">
                  <PublicationEvent />
                </Route>
                <Route path="/userAbonné">
                  <UserAbonné />
                </Route>
                <Route path="/userAnnonceur">
                  <UserAnnonceur />
                </Route>
                <Route path="/reclamation">
                  <Reclamation />
                </Route>
                <Route path="/adminManagment">
                  <AdminManagment />
                </Route>
                <Route path="/adressManagment">
                  <AdressManagment />
                </Route>
                <Route exact path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AdminHomePage;
