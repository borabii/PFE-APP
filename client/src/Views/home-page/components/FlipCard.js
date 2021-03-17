import React from "react";
import "./FlipCard.css";
import avatar from "../../image/landing-page-image.jpg";

function FlipCard() {
  return (
    <div>
      <div className=" col-xm-12 col-sm-6 col-md-4 col-lg-4">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={avatar} alt="" />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
