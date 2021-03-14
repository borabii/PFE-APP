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

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* <SearchIcon className="header__searchIcon" /> */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">hello guest</span>

          <span className="header__optionLineTow">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTow">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTow">Prime</span>
        </div>

        <div className="header__optionBasket"></div>
      </div>
    </div>
  );
}

export default Header;
