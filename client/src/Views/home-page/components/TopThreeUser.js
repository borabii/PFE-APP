import React from "react";
import "./TopThreeUser.css";
import avatar from "../../image/signIn-avatar.png";

function TopThreeUser() {
  return (
    <div className="topThreeUser">
      <div className="container">
        <div className="section-title">
          <h2>Top 3 user</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="topThreeUser__cardContainer">
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={avatar} className="img-responsive" alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={avatar} className="img-responsive" alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={avatar} className="img-responsive" alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopThreeUser;
