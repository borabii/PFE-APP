import React from "react";
import "./FlipCard.css";
import avatar from "../../image/landing-page-image.jpg";
import Card from "react-bootstrap/Card";

function FlipCard(props) {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={avatar} alt="" />
          </div>
          <div className="flip-card-back">
            <Card className="topUser-card">
              <Card.Img
                variant="top"
                className="topUserCard-img"
                src={`http://localhost:8000/${props.user.imageProfile}`}
              />
              <Card.Body>
                <Card.Title>
                  {props.user.firstName + " " + props.user.lastName}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted grade-user">
                  user level
                </Card.Subtitle>
                <div className="topUser-grade">
                  <div className="topUser-score">
                    <h4>Score</h4>
                    <p>{props.user.userScore} points</p>
                  </div>
                  <div className="topUser-avis">
                    <h4>Avis</h4>
                    <p>2.3</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
