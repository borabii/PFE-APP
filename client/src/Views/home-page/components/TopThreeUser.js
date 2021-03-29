import React from "react";
import FlipCard from "./FlipCard";
import "./TopThreeUser.css";

function TopThreeUser() {
  return (
    <div className="container-fluid" id="topThreeUser">
      <div className="container">
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
