import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h4>logo</h4>
      <div className="header__nav">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#topThreeUser" className="page-scroll">
              Features
            </a>
          </li>
          <li>
            <a href="#aboutUs" className="page-scroll">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Services
            </a>
          </li>
        </ul>
      </div>
      <div className="header__option">
        <a>Connexion</a>

        <button className=" btn btn-lg">
          <p>S'inscrire</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
