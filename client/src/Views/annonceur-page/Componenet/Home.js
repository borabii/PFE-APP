import React, { useState } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Carousel from "react-elastic-carousel";
import PubCard from "../../abonnée-pages/component/PubCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditIcon from "@material-ui/icons/Edit";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import EditWorktimePopUp from "./EditWorkTimePopUp";

function AnnonceurVisitedProfile() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [addAddCatégorieModalShow, setAddAddCatégorieModalShow] = useState(
    false
  );

  return (
    <div className="annonceurVisitedProfile">
      {/* <div className="annonceurVisitedProfile-top">
        <div className="top-left">
          <div className="imgProfil">
            <img src="" alt="" />
            <label for="file-upload" class="file-upload-btn">
              <EditIcon id="editImage-icon" />
            </label>
            <input type="file" id="file-upload" />
          </div>
        </div>
        <div className="Annonceurtop-middle">
          <div className="annonceur-info">
            <div id="user-name">
              <h2>Jones jack</h2>
              <p>48 ans</p>
            </div>
            <div id="user-adresse">
              <LocationOnIcon id="userLoc-icon" />
              <p>Ariana,Tunis</p>
            </div>
          </div>
          <div className="annonceur-EditTime">
            <EditWorktimePopUp
              show={addAddCatégorieModalShow}
              onHide={() => setAddAddCatégorieModalShow(false)}
            />
            <div id="HoraireTime">
              <h3>Horaire </h3>
            </div>
            <div>
              <AccessAlarmIcon
                id="editWorkIcon"
                onClick={() => setAddAddCatégorieModalShow(true)}
              />
            </div>
          </div>
        </div>
        <div className="top-right">
          <div className="annonceurProfile-rank">
            <div id="user-avis">
              <h3>Avis</h3>
              <p>2.3 etoile</p>
            </div>
            <div id="user-score">
              <h3>Abonnés</h3>
              <p>350</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="annonceur-profile">
        <div className="profile-imageProfile">
          <div className="imgProfil" id="annonceurImage">
            <img src="" alt="" />
            <label for="file-upload" class="file-upload-btn">
              <EditIcon id="editImage-icon" />
            </label>
            <input type="file" id="file-upload" />
          </div>
        </div>
        <div className="profile-info">
          <div className="annonceur-info">
            <div id="user-name">
              <h2>Jones jack</h2>
              <span id="annoceur-contact">
                <h2 id="annonceur-tel">Numero tel:</h2>
                <p id="num-tel">50505050</p>
              </span>
            </div>
            <div id="annonceur-adresse">
              <LocationOnIcon id="annonceurLoc-icon" />
              <p>Ariana,Tunis</p>
            </div>
          </div>
          <div className="annonceur-EditTime">
            <EditWorktimePopUp
              show={addAddCatégorieModalShow}
              onHide={() => setAddAddCatégorieModalShow(false)}
            />
            <div id="HoraireTime">
              <h3>Horaire </h3>
            </div>
            <div>
              <AccessAlarmIcon
                id="editWorkIcon"
                onClick={() => setAddAddCatégorieModalShow(true)}
              />
            </div>
          </div>
        </div>
        <div className="annonceur-avis">
          <div className="annonceurProfile-rank">
            <div id="user-avis">
              <h3>Avis</h3>
              <p>2.3 etoile</p>
            </div>
            <div id="annonceur-score">
              <h3>Abonnés</h3>
              <p>350</p>
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
              <p id="num-tel">50505050</p>
            </div>
            <div id="user-adresse">
              <LocationOnIcon id="userLoc-icon" />
              <p>Ariana,Tunis</p>
            </div>
          </div>
          <div className="annonceur-EditTime">
            <EditWorktimePopUp
              show={addAddCatégorieModalShow}
              onHide={() => setAddAddCatégorieModalShow(false)}
            />
            <div id="HoraireTime">
              <h3>Horaire </h3>
            </div>
            <div>
              <AccessAlarmIcon
                id="editWorkIcon"
                onClick={() => setAddAddCatégorieModalShow(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="annonceurVisitedProfile-middel">
        <div id="middel-top">
          <h2>Événemet Organisées</h2>
          <button className="addEvent-btn ">
            {" "}
            <p id="addAct-text">Publier Événement</p>
          </button>
        </div>
        <Carousel
          pagination={false}
          itemPadding={[0, 5]}
          breakPoints={breakPoints}
        >
          <PubCard />
          <PubCard />
          <PubCard />
          <PubCard />
          <PubCard />
        </Carousel>
      </div>
      <div className="annonceurVisitedProfile-bottom">
        <div id="middel-top">
          <h2>Annonces</h2>
          <button className="addEvent-btn ">
            {" "}
            <p id="addAct-text">Publier Annonce</p>
          </button>
        </div>
        <div id="user-interset">
          <Container>
            <Row xs={1} md={2} lg={4}>
              <Col>
                <PubCard />
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
