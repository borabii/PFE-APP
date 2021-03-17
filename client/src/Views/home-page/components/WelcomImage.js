import React from "react";
import image from "../../image/landing-page-image.jpg";
import "./WelcomImage.css";
function WelcomImage() {
  return (
    <header className="welcomImage">
      {/* <div className="welcomImage__container">
        <img src={image} alt="" />

        <div className="welcomImage__discription">
          <h1>Application de rencotre sportive </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            tristique neque, commodo, id senectus. Interdum mauris in faucibus
            ac pretium convallis.
          </p>
          <button>S'inscrire</button>
        </div>
      </div> */}
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  APPLICATION DE RENCONTRE SPORTIVE
                  <span></span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor tristique neque, commodo, id senectus. Interdum mauris
                  in faucibus ac pretium convallis.
                </p>
                <button className="btn btn-custom btn-lg ">S'inscrire</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default WelcomImage;
