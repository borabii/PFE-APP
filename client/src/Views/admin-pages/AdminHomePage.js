import React from "react";
import "./AdminHomePage.css";

function AdminHomePage() {
  return (
    <div className="adminHomePage">
      <div className="adminHomePage__navbar">
        <div className="nav__option">
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
        <div className="container-fluid h-100 ">
          <div className=" row row-eq-height ">
            <div className="col col-md-3   p-0 ">
              <div className="w-30 adminHomePage__body"></div>
            </div>
            <div className="col col-md-9 p-0">
              <div className=" w-70 adminHomePage__sidbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
