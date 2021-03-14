import React from "react";
import Header from "../components/Header";
import "./Home.css";
import image from "../image/landing-page-image.jpg";
function Home() {
  return (
    <div className="home">
      <Header />

      <div className="home__container">
        {/* welcom div */}
        <div className="home__image">
          <img className="home__image" src={image} alt="" />
        </div>
        {/* top 3 user div */}
        <div className="home__topthreeUser">
          <h1>top three</h1>
        </div>
        {/* top user per sports */}
        <div className="home__topUser"></div>
        {/* a propos */}
        <div className="home__aboutUs">
          <h1>about us</h1>
        </div>
        {/* contact us  */}
        <div className="home__contactUS">contactus</div>
        {/* footer */}
        <div className="home_footer">
          <h1>footer</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
