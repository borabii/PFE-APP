import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h4>logo</h4>
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
