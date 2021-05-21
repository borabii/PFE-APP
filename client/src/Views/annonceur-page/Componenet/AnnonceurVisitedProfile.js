import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Carousel from "react-elastic-carousel";
import PubCard from "../../abonnée-pages/component/PubCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AnnonceurVisitedProfile() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="annonceurVisitedProfile">
      <div className="annonceurVisitedProfile-top">
        <div className="top-left">
          <img
            src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div className="top-middle">
          <div className="userProfile-info">
            <div id="user-name">
              <h2>Jones jack</h2>
              <p>48 ans</p>
            </div>
            <div id="user-adresse">
              <LocationOnIcon id="userLoc-icon" />
              <p>Ariana,Tunis</p>
            </div>
          </div>
          <div className="userProfile-rank">
            <div id="user-avis">
              <h3>Avis</h3>
              <p>2.3 etoile</p>
            </div>
            <div id="user-score">
              <h3>abonnés</h3>
              <p>350</p>
            </div>
          </div>
          <div className="userProfile-action">
            <div id="user-sendMessage">
              <a>
                <ChatBubbleOutlineIcon id="user-chatIcon" />
                Envoyer un Message
              </a>
            </div>
            <button id="btn-follow">Suivre</button>
          </div>
        </div>
        <div className="top-right">
          <div className="userProfile-note">
            <div id="user-rate">
              <h3>Evaluer moi</h3>
              <p>starts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="annonceurVisitedProfile-topSmallDevice">
        <div className="top-left">
          <img
            src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div className="top-middle">
          <div className="userProfile-info">
            <div id="user-name">
              <h2>Jones jack</h2>
              <p>48 ans</p>
            </div>
            <div id="user-adresse">
              <LocationOnIcon id="userLoc-icon" />
              <p>Ariana,Tunis</p>
            </div>
          </div>
          <div className="userProfile-rank">
            <div id="user-avis">
              <h3>Avis</h3>
              <p>2.3 etoile</p>
            </div>
            <div id="user-score">
              <h3>Score</h3>
              <p>350</p>
            </div>
          </div>
          <div className="userProfile-action">
            <div id="user-sendMessage">
              <a>
                <ChatBubbleOutlineIcon id="user-chatIcon" />
                Envoyer un Message
              </a>
            </div>
            <button id="btn-follow">Suivre</button>
          </div>
        </div>
        <div className="top-right">
          <div className="userProfile-note">
            <div id="user-rate">
              {/* <h3>Evaluer moi</h3> */}
              <p>starts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="annonceurVisitedProfile-middel">
        <h2>Evenemet Organisées</h2>
        <Carousel
          pagination={false}
          itemPadding={[0, 5]}
          breakPoints={breakPoints}
        >
          {/* <PubCard />
          <PubCard />
          <PubCard />
          <PubCard />
          <PubCard /> */}
        </Carousel>
      </div>
      <div className="annonceurVisitedProfile-bottom">
        <h2>Annonces</h2>
        <div id="user-interset">
          <Container>
            <Row xs={1} md={2} lg={4}>
              <Col>
                <img
                  id="annonce-img"
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />{" "}
              </Col>
              <Col>
                <img
                  id="annonce-img"
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />{" "}
              </Col>
              <Col>
                <img
                  id="annonce-img"
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />{" "}
              </Col>
              <Col>
                <img
                  id="annonce-img"
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />{" "}
              </Col>
              <Col>
                <img
                  id="annonce-img"
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AnnonceurVisitedProfile;
