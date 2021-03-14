import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__option">
        <h6>Connexion</h6>
        <button>S'inscrire</button>
      </div>
    </div>
  );
}

export default Header;
