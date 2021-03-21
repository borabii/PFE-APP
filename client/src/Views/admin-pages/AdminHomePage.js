import React from "react";
import "./Style.css";
// React Clock for real time display
import Clock from "react-live-clock";

import BoiteMessage from "./component/BoiteMessage";
import Dashboard from "./component/Dashboard";
import Demande from "./component/Demande";
import CategoryManagment from "./component/CategoryManagment";
import PublicationActivity from "./component/PublicationActivity";
import PublicationAnnonce from "./component/PublicationAnnonce";
import PublicationEvent from "./component/PublicationEvent";
import UserAbonné from "./component/UserAbonné";
import UserAnnonceur from "./component/UserAnnonceur";
import Reclamation from "./component/Reclamation";
import AdminManagment from "./component/AdminManagment";
import AdressManagment from "./component/AdressManagment";
import AddAdminPopUp from "./component/AddAdminPopUp";
import EditAdminPopUp from "./component/EditAdminPopUp";
import AddAddressPopUp from "./component/AddAddressPopUp";
import AddCategoryPopUP from "./component/AddCategoryPopUP";

function AdminHomePage() {
  return (
    <div className=" container-fluid  px-0 adminHomePage">
      <div className="adminHomePage__navbar">
        <div className="navbar nav__option">
          <h2>Welcome Admin</h2>
        </div>
        <div className="nav__option clock">
          {/* displaying system time for user ( set ticking to true for auto upadate each second) */}
          <Clock format={"HH:mm:ss"} ticking={true} />{" "}
        </div>
        <div className="nav__option">
          <button>
            <p>déconnexion</p>
          </button>
        </div>
      </div>
      <div className="adminHomePage__container">
        <div className="container  adminHomePage__sidbar">
          <div className="sidbar__item">
            <h4>Dashboard</h4>
            <h3>Gestion admins</h3>
            <h3>Gestion Catégorie</h3>
            <h3>Gestion localité</h3>
            <h3>Publication</h3>
            <dd>
              <dl>Annonce</dl>
              <dl>Activité</dl>
              <dl>Evénement</dl>
            </dd>
            <h3>Users</h3>
            <dd>
              <dl>Annonceur</dl>
              <dl>Abonné</dl>
            </dd>
            <h3>Réclamation</h3>
            <h3>Demmande</h3>
          </div>
        </div>

        <div className=" container-fluid">
          <div className=" container-fluid w-100 px-4  body-container">
            {/* <Dashboard /> */}
            {/* <BoiteMessage /> */}
            {/* <Demande /> */}
            {/* <CategoryManagment /> */}
            {/* <PublicationActivity /> */}
            {/* <PublicationAnnonce /> */}
            {/* <PublicationEvent /> */}
            {/* <UserAbonné /> */}
            {/* <UserAnnonceur /> */}
            {/* <Reclamation /> */}
            {/* <AdminManagment /> */}
            {/* <AdressManagment /> */}

            {/* <AddAdminPopUp /> */}
            {/* <EditAdminPopUp /> */}
            {/* <AddAddressPopUp /> */}
            <AddCategoryPopUP />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
