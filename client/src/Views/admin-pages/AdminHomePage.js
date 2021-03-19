import React from "react";
import "./AdminHomePage.css";
import Dashboard from "./component/Dashboard";

function AdminHomePage() {
  return (
    <div className=" container-fluid  px-0 adminHomePage">
      <div className="adminHomePage__navbar">
        <div className="navbar nav__option">
          <h2>Welcome Admin</h2>
        </div>
        <div className="nav__option">
          <h3>11:12</h3>
        </div>
        <div className="nav__option">
          <button>
            <p>déconnexion</p>
          </button>
        </div>
      </div>
      <div className="adminHomePage__container">
        <div className=" adminHomePage__sidbar">
          <div className="sidbar__item">
            <h2>Dashboard</h2>
            <h2>Gestion admins</h2>
            <h2>Gestion Catégorie</h2>
            <h2>Gestion localité</h2>
            <h2>Publication</h2>
            <dd>
              <dl>Annonce</dl>
              <dl>Activité</dl>
              <dl>Evénement</dl>
            </dd>
            <h2>Users</h2>
            <dd>
              <dl>Annonceur</dl>
              <dl>Abonné</dl>
            </dd>
            <h2>Réclamation</h2>
            <h2>Demmande</h2>
          </div>
        </div>
        <div className="adminHomePage__body">
          <div className=" container-fluid body__container">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
