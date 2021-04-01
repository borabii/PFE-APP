import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
function PubCard() {
  return (
    <div className=" card pubCard">
      <div className="pubCard-image">
        <div className="pubCard-nbrParticipant">
          <p>2 PLACES</p>{" "}
        </div>
        <div className="pubCard-horaire">
          <p>15:00 - 17:00</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
      </div>
      <div className="pubCard-info">
        <div className="pubInfo-date">
          <h4>Avril</h4>
          <p>13</p>
        </div>
        <div className="pubInfo-add">
          <h4>Tennis</h4>
          <span id="pub-add">
            <LocationOnIcon id="pubLoc-icon" />
            <p>Ariana</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PubCard;
