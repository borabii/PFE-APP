import React from "react";
import "./WelcomImage.css";
// import intro_image from "../../image/landing-page-image.jpg";
function WelcomImage() {
  return (
    <header className="welcomImage">
      <div className="intro">
        <div className="overlay">
          <div className="container ">
            <div className="row ">
              <div className="col col-md-8 col-md-offset-2 mx-auto  intro-text">
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
      {/* <div className="container-fluid  px-0 ">
        <div className="intro">
          <img src={intro_image} alt="" className="img-fluid" /> 

          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 ">
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
      </div> */}
    </header>
  );
}
export default WelcomImage;
