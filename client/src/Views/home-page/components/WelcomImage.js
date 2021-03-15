import React from "react";
import image from "../../image/landing-page-image.jpg";
import "./WelcomImage.css";
function WelcomImage() {
  return (
    <div className="welcomImage">
      <div className="home__image">
        <img className="home__image" src={image} alt="" />
      </div>
    </div>
  );
}

export default WelcomImage;
