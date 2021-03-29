import React from "react";
import "./WelcomImage.css";
function WelcomImage() {
  return (
    <header className="welcomImage" id="home">
      <div className="intro">
        <div className="overlay">
          <div className="col col-md-8 col-md-offset-2 mx-auto  intro-text">
            <h1>APPLICATION DE RENCONTRE SPORTIVE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              tristique neque, commodo, id senectus. Interdum mauris in faucibus
              ac pretium convallis.
            </p>
            <button className="btn btn-custom btn-lg ">S'inscrire</button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default WelcomImage;
