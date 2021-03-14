import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h4>logo</h4>
      <div className="header__option">
        <h6>Connexion</h6>
        <button>
          <p>S'inscrire</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
