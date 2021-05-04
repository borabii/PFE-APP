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
import EditInfoPopUp from "./EditInfoPopUp";
import AddEventPopUp from "./AddEventPopUp";
import AddAnnoncePopUp from "./AddAnnoncePopUp";
import Card from "react-bootstrap/Card";
import EditEventPopUp from "./EditEventPopUp";
function AnnonceurVisitedProfile() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [editWorkTimeModalShow, setEditWorkTimeModalShow] = useState(false);
  const [editInfoModalShow, setEditInfoModalShow] = useState(false);
  const [addEventModalShow, setAddEventModalShow] = useState(false);
  const [addAnnonceModalShow, setAddAnnonceModalShow] = useState(false);
  const [detailEventModalShow, setDetailEventModalShow] = useState(false);
  const [eventClicked, setEventClicked] = useState({
    typePub: "",
    _id: "",
    description: "",
    adresse: "",
    nbr_place: 0,
    date_DebutPub: "",
    heure_debutPub: "",
    date_FinPub: "",
    heure_finPub: "",
    user: "",
    date_Pub: "",
    tarifEvent: "",

    __v: 0,
  });

  const items = [
    {
      typePub: "Activity",
      _id: "6090a6933eb87241f8940cda",
      description: "azeazeaze",
      adresse: "azeaze",
      categorie: "dddd",
      nbr_place: 1,
      date_DebutPub: "2021-05-25T00:00:00.000+00:00",
      heure_debutPub: "12:02",
      date_FinPub: "2021-05-19T00:00:00.000+00:00",
      heure_finPub: "12:00",
      user: "6087af031410004ce060a628",
      tarifEvent: "122",

      date_Pub: "2021-05-04T01:42:43.631+00:00",
      __v: 0,
    },
    {
      typePub: "Activity",
      _id: "6090a6933eb87241f8940cda",
      description: "azeazeaze",
      adresse: "azeaze",
      categorie: "dddd",
      nbr_place: 2,
      date_DebutPub: "2021-05-25T00:00:00.000+00:00",
      heure_debutPub: "12:02",
      date_FinPub: "2021-05-19T00:00:00.000+00:00",
      heure_finPub: "12:01",
      user: "6087af031410004ce060a628",
      tarifEvent: "122",

      date_Pub: "2021-05-04T01:42:43.631+00:00",
      __v: 0,
    },
    {
      typePub: "Activity",
      _id: "6090a6933eb87241f8940cda",
      description: "azeazeaze",
      adresse: "azeaze",
      categorie: "dddd",
      nbr_place: 3,
      date_DebutPub: "2021-05-25T00:00:00.000+00:00",
      heure_debutPub: "12:02",
      date_FinPub: "2021-05-19T00:00:00.000+00:00",
      heure_finPub: "12:01",
      user: "6087af031410004ce060a628",
      tarifEvent: "122",

      date_Pub: "2021-05-04T01:42:43.631+00:00",
      __v: 0,
    },
  ];
  //this methode is used for display monthName from date Sting
  const getMonthName = (date) => {
    let d = new Date(date);
    let month = d.getUTCMonth() + 1;
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dateStr = monthNames[month - 1];
    return dateStr;
  };
  //this methode is used for display day from date Sting
  const getDay = (date) => {
    let d = new Date(date);
    var day = d.getUTCDate();
    return day;
  };
  //this methode used for handel user click in which event card
  const handleClick = (id, event) => {
    console.log(id);
    setEventClicked(items[id]);
    setDetailEventModalShow(true);
  };
  return (
    <div className="annonceurVisitedProfile">
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
              show={editWorkTimeModalShow}
              onHide={() => setEditWorkTimeModalShow(false)}
            />
            <div id="HoraireTime">
              <h4>Horaire </h4>
              <div>
                <AccessAlarmIcon
                  id="editWorkIcon"
                  onClick={() => setEditWorkTimeModalShow(true)}
                />
              </div>
            </div>
            <div id="edit-profile">
              <EditInfoPopUp
                show={editInfoModalShow}
                onHide={() => setEditInfoModalShow(false)}
              />
              <h4> Mes Info</h4>
              <EditIcon
                id="editInfoIcon"
                onClick={() => setEditInfoModalShow(true)}
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
          <div className="annonceur-EditTime">
            <EditWorktimePopUp
              show={editWorkTimeModalShow}
              onHide={() => setEditWorkTimeModalShow(false)}
            />
            <div id="HoraireTime">
              <h4>Horaire </h4>
              <div>
                <AccessAlarmIcon
                  id="editWorkIcon"
                  onClick={() => setEditWorkTimeModalShow(true)}
                />
              </div>
            </div>
            <div id="edit-profile">
              <EditInfoPopUp
                show={editInfoModalShow}
                onHide={() => setEditInfoModalShow(false)}
              />
              <h4> Mes Info</h4>
              <EditIcon
                id="editInfoIcon"
                onClick={() => setEditInfoModalShow(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="annonceurVisitedProfile-middel">
        <div id="middel-top">
          <AddEventPopUp
            show={addEventModalShow}
            onHide={() => setAddEventModalShow(false)}
          />
          <h2>Événemet Organisées</h2>
          <button
            className="addEvent-btn "
            onClick={() => setAddEventModalShow(true)}
          >
            {" "}
            <p id="addAct-text">Publier Événement</p>
          </button>
        </div>
        <Carousel
          pagination={false}
          itemPadding={[0, 5]}
          breakPoints={breakPoints}
        >
          {items.map((item, index) => {
            return (
              <>
                <Card
                  className=" mb-5  pubCard pubCard-phone"
                  id="event-card"
                  key={index}
                >
                  <div className="pubCard-image">
                    <div className="pubCard-nbrParticipant">
                      <p>{item.nbr_place} PLACES </p>{" "}
                    </div>
                    <div className="pubCard-horaire">
                      <p>15:00 - 17:00</p>
                    </div>

                    <img
                      src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt=""
                    />
                  </div>
                  <div className="pubCard-info" id="eventCardInfo">
                    <div id="eventCard-left">
                      <div className="pubInfo-date" id="event-date">
                        <h4>{getMonthName(item.date_Pub)}</h4>
                        <p id="date-event">{getDay(item.date_Pub)}</p>
                      </div>
                      <div className="pubInfo-add" id="event-adresse">
                        <h4>Tennis</h4>
                        <span id="pub-add">
                          <LocationOnIcon id="pubLoc-icon" />
                          <p id="event-loc">{item.adresse}</p>
                        </span>
                      </div>
                    </div>

                    <div id="event-action">
                      <EditEventPopUp
                        show={detailEventModalShow}
                        data={eventClicked}
                        onHide={() => setDetailEventModalShow(false)}
                      />
                      <EditIcon
                        key={index}
                        id="editEvent-icon"
                        onClick={(e) => handleClick(index, e)}
                      />
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </Carousel>
      </div>
      <div className="annonceurVisitedProfile-bottom">
        <div id="middel-top">
          <AddAnnoncePopUp
            show={addAnnonceModalShow}
            onHide={() => setAddAnnonceModalShow(false)}
          />
          <h2>Annonces</h2>
          <button
            className="addEvent-btn "
            onClick={() => setAddAnnonceModalShow(true)}
          >
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
