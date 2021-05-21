import React, { useState, useEffect, useContext, Fragment } from "react";
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
import EditEventPopUp from "./EditEventPopUp";
import UserContext from "../../../Context/user/userContext";
import DetailEventPopUp from "../../admin-pages/component/DetailEventPopUp";
import Spinner from "../../layout/Spinner";
import PubContext from "../../../Context/Publication/pubContext";
import { useSnackbar } from "notistack";
import PubDetailPopUp from "../../abonnée-pages/component/PubDetailPopup";
import ManagePubModalShow from "../../abonnée-pages/component/ManagePubModalShow";
import Spinner1 from "../../layout/Spinner1";
import AnnonceCard from "./AnnonceCard";
import DétailAnnoncePopUp from "./DétailAnnoncePopUp";
import EditAnnoncePopUp from "./EditAnnoncePopUp";
function AnnonceurVisitedProfile() {
  //app level state
  //Publication context
  const pubContext = useContext(PubContext);
  const {
    anonceurEvent,
    pubResponseMsg,
    ClearPubResponseMsg,
    clearAnnonceurPub,
    loadEvent,
    loadAnnonce,
    annonceurAnnonce,
  } = pubContext;
  //User context
  const userContext = useContext(UserContext);
  const {
    annonceur,
    loadAnnonceur,
    loading,
    getCatégorie,
    updateAnnonceurProfileImage,
  } = userContext;
  //carousel config for display item depending viewport size
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  //componenet level state
  const [UserImage, setUserImage] = useState(null);
  const [editWorkTimeModalShow, setEditWorkTimeModalShow] = useState(false);
  const [editEventModalShow, setEditEventModalShow] = useState(false);
  const [editAnnonceModalShow, setEditAnnonceModalShow] = useState(false);

  const [editInfoModalShow, setEditInfoModalShow] = useState(false);
  const [addEventModalShow, setAddEventModalShow] = useState(false);
  const [addAnnonceModalShow, setAddAnnonceModalShow] = useState(false);
  const [detailEventModalShow, setDetailEventModalShow] = useState(false);
  const [detailAnnonceModalShow, setDetailAnnonceModalShow] = useState(false);
  const [eventClicked, setEventClicked] = useState({});

  //this methode used for handel user click in which event card
  const handleClick = (e, item) => {
    setEventClicked(item);
    setEditEventModalShow(true);
  };
  //this methode run when user click on detail action icon on pub  card
  const handleDetailClick = (e, item) => {
    setEventClicked(item);
    setDetailEventModalShow(true);
  };
  //this methode run when user click on detail action icon on Annonce  card
  const handleDetailAnnonceCardClick = (e, item) => {
    setEventClicked(item);
    setDetailAnnonceModalShow(true);
  };
  //
  const handleEditAnnonceClick = (e, item) => {
    setEventClicked(item);
    setEditAnnonceModalShow(true);
  };
  //handel user image input
  const imageSelectHandler = (event) => {
    setUserImage(event.target.files[0]);
  };

  //run when user upload new profile image
  useEffect(() => {
    if (annonceur !== null) {
      const formData = new FormData();
      formData.append("imageProfile", UserImage);
      updateAnnonceurProfileImage(formData, annonceur._id);
    }
  }, [UserImage]);
  //run when component is mounted
  useEffect(() => {
    loadAnnonceur();
    getCatégorie();
  }, []);
  useEffect(() => {
    if (annonceur) {
      loadEvent(annonceur._id);
      loadAnnonce(annonceur._id);
    }
    return () => {
      ClearPubResponseMsg();
      clearAnnonceurPub();
    };
  }, [loading === false, annonceur]);
  //
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (pubResponseMsg !== "aucune message") {
      enqueueSnackbar(pubResponseMsg, { variant: "success" });
    }
    return () => {
      ClearPubResponseMsg();
    };
  }, [pubResponseMsg]);
  return (
    <Fragment>
      {annonceur !== null && !loading ? (
        <div className="annonceurVisitedProfile">
          <div className="annonceur-profile">
            <div className="profile-imageProfile">
              <div className="imgProfil" id="annonceurImage">
                <img
                  src={`http://localhost:8000/${annonceur.imageCouverture}`}
                  alt=""
                />
                <label for="file-upload" class="file-upload-btn">
                  <EditIcon id="editImage-icon" />
                </label>
                <input
                  type="file"
                  id="file-upload"
                  name="imageProfile"
                  onChange={imageSelectHandler}
                />
              </div>
            </div>
            <div className="profile-info">
              <div className="annonceur-info">
                <div id="user-name">
                  <h2>{annonceur.nomAnnonceur}</h2>
                  <span id="annoceur-contact">
                    <h2 id="annonceur-tel">Numero tel:</h2>
                    <p id="num-tel">{annonceur.numTelAnnonceur}</p>
                  </span>
                </div>
                <div id="annonceur-adresse">
                  <LocationOnIcon id="annonceurLoc-icon" />
                  <p id="add">{annonceur.adresseAnnonceur}</p>
                </div>
              </div>

              <div className="annonceur-EditTime">
                {/* <EditWorktimePopUp
            show={editWorkTimeModalShow}
            data={annonceur.horaireAnnonceur}
            onHide={() => setEditWorkTimeModalShow(false)}
          /> */}
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
            <div id="annonceurSmallDev-img">
              <div className="imgProfil ">
                <img
                  src={`http://localhost:8000/${annonceur.imageCouverture}`}
                  alt=""
                />
                <label for="file-upload" className="file-upload-btn">
                  <EditIcon id="editImage-icon" />
                </label>
                <input
                  type="file"
                  id="file-upload"
                  name="imageProfile"
                  onChange={imageSelectHandler}
                />
              </div>
            </div>

            <div className="top-middle">
              <div className="userProfile-info">
                <div id="user-name">
                  <h2>{annonceur.nomAnnonceur}</h2>
                  <p id="num-tel">{annonceur.numTelAnnonceur}</p>
                </div>
                <div id="user-adresse">
                  <LocationOnIcon id="userLoc-icon" />
                  <p id="add">{annonceur.adresseAnnonceur}</p>
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
                <p id="addAct-text">Publier Événement</p>
              </button>
            </div>
            <Carousel
              pagination={false}
              itemPadding={[0, 5]}
              breakPoints={breakPoints}
            >
              {/* if there is a anonceurEvent and not loading, show list of event | if not -> show Spinner1 */}
              {!loading && anonceurEvent !== null ? (
                //  if there is event ,show list of event |if not-> show Ajoter des événement
                anonceurEvent.length > 0 ? (
                  anonceurEvent.map((item, index) => (
                    <>
                      <PubCard
                        act={item}
                        editPubOption={true}
                        key={index}
                        editOnClick={(e) => handleClick(e, item)}
                        detailOnClickIcon={(e) => handleDetailClick(e, item)}
                      />
                    </>
                  ))
                ) : (
                  <h1>Ajouter des événement</h1>
                )
              ) : (
                <Spinner1 />
              )}
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
                <p id="addAct-text">Publier Annonce</p>
              </button>
            </div>
            <div id="user-interset">
              <Container fluid className="noPadding">
                <Row xs={1} sm={2} md={2} lg={3}>
                  {/* if there is a annonceurAnnonce and not loading, show list of annonce | if not -> show Spinner1 */}
                  {!loading && annonceurAnnonce !== null ? (
                    //  if there is annonce ,show list of annonce |if not-> show Ajouter des annonces
                    annonceurAnnonce.length > 0 ? (
                      annonceurAnnonce.map((item, index) => (
                        <>
                          <Col xs={12} sm={6} md={6} lg={4}>
                            <AnnonceCard
                              key={index}
                              annonceData={item}
                              editPubOption={true}
                              detailOnClickIcon={(e) =>
                                handleDetailAnnonceCardClick(e, item)
                              }
                              editOnClick={(e) =>
                                handleEditAnnonceClick(e, item)
                              }
                            />
                          </Col>
                        </>
                      ))
                    ) : (
                      <h1>Ajouter des Annonce</h1>
                    )
                  ) : (
                    <Spinner1 />
                  )}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <EditEventPopUp
        show={editEventModalShow}
        data={eventClicked}
        onHide={() => setEditEventModalShow(false)}
      />
      <ManagePubModalShow
        show={detailEventModalShow}
        data={eventClicked}
        onHide={() => setDetailEventModalShow(false)}
      />
      <DétailAnnoncePopUp
        show={detailAnnonceModalShow}
        data={eventClicked}
        onHide={() => setDetailAnnonceModalShow(false)}
      />
      <EditAnnoncePopUp
        show={editAnnonceModalShow}
        data={eventClicked}
        onHide={() => setEditAnnonceModalShow(false)}
      />
    </Fragment>
  );
}

export default AnnonceurVisitedProfile;
