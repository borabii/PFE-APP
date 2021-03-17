import React from "react";
import FlipCard from "./FlipCard";
import "./TopThreeUser.css";

function TopThreeUser() {
  return (
    <div className="container-fluid color" id="topThreeUser">
      <div className="container">
        <div className="section-title text-center">
          <h2>Notre Top trois Utilisateurs de jour</h2>
          <p>
            c'est une selction des trois top utilisateur de jour selon le score
          </p>
        </div>
        <div className="row justify-content-center">
          <FlipCard />
          <FlipCard />
          <FlipCard />
        </div>
      </div>
    </div>
  );
}

export default TopThreeUser;
