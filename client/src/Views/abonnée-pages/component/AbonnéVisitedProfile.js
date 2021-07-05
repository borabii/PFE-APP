import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Carousel from "react-elastic-carousel";
import PubCard from "./PubCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { calucleAge } from "../../../utilis/date";
import { Rating } from "@material-ui/lab";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PubDetailPopUp from "./PubDetailPopup";
import UserContext from "../../../Context/user/userContext";
import { useSnackbar } from "notistack";
import Spinner from "../../layout/Spinner";
import SignalPopUp from "./SignalPopUp";
import history from "../../../utilis/history";

function AbonnéVisitedProfile(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: true },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  //app level state
  const userContext = useContext(UserContext);
  const {
    loadUserProfileInfo,
    clearAbonnéUserProfileInfo,
    visitedProfileInfo,
    loading,
    rateUser,
    followUser,
    unFollowUser,
    responseMessage,
    ClearResponseMessage,
  } = userContext;
  //component level state
  // const [Data, setData] = useState({});
  const [Act, setAct] = useState({});
  const [pubOrganisateur, setPubOrganisateur] = useState({});
  const [eventClicked, setEventClicked] = useState({});
  const [detailPubModalShow, setDetailPubModalShow] = useState(false);
  const [showSignalerPopUp, setShowSignalerPopUp] = useState(false);
  const handleDetailClick = (e, item) => {
    setEventClicked(item);
    setDetailPubModalShow(true);
    axios
      .get(`http://localhost:8000/api/users/Admin/getDemandeur/${item.user}`)
      .then((res) => setPubOrganisateur(res.data));
  };

  useEffect(() => {
    loadUserProfileInfo(props.match.params.id);
    axios
      .get(
        `http://localhost:8000/api/Publication/Profile/getActOrg/${props.match.params.id}`
      )
      .then((response) => setAct(response.data));
    return () => {
      clearAbonnéUserProfileInfo();
    };
  }, []);

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (responseMessage !== "aucune message") {
      enqueueSnackbar(responseMessage, { variant: "success" });
    }
    return () => {
      ClearResponseMessage();
    };
  }, [responseMessage]);

  const openChat = async () => {
    const res = await axios.post(
      `http://localhost:8000/api/Conversations/NewConv/${props.match.params.id}`
    );
    if (res.data) {
      history.push(`/AbonnéHomePage/BoiteMsg`);
    }
  };
  return (
    <div className="abonnéVisitedProfile">
      {" "}
      {visitedProfileInfo !== null && !loading ? (
        <>
          <div className="abonnéVisitedProfile-top">
            <div className="top-left">
              <img
                src={`http://localhost:8000/${visitedProfileInfo.profileInfo.imageProfile}`}
                alt=""
              />
            </div>
            <div className="top-middle">
              <div className="userProfile-info">
                <div id="user-name">
                  <h2>
                    {visitedProfileInfo.profileInfo.firstName}{" "}
                    {visitedProfileInfo.profileInfo.lastName}
                  </h2>
                  <p>
                    {" "}
                    {calucleAge(visitedProfileInfo.profileInfo.dateOfBirth)} ans
                  </p>
                </div>
                <div id="user-adresse">
                  <LocationOnIcon id="userLoc-icon" />
                  hiboun,Mahdia
                  {/* <p>{Data.abonnéProfile.adress}</p> */}
                </div>
              </div>
              <div className="userProfile-rank">
                <div id="user-avis">
                  <h3>Avis</h3>
                  <p>
                    <Rating
                      name="customized-empty"
                      size="large"
                      value={visitedProfileInfo.totalRate}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      precision={0.5}
                      readOnly
                    />
                  </p>
                </div>
                <div id="user-score">
                  <h3>Score</h3>
                  <p>{visitedProfileInfo.profileInfo.userScore}</p>
                </div>
              </div>
              <div className="userProfile-action">
                <div id="user-sendMessage">
                  <a onClick={() => openChat()}>
                    <ChatBubbleOutlineIcon id="user-chatIcon" />
                    Envoyer un Message
                  </a>
                </div>
                {visitedProfileInfo.isAlreadyFollowed ? (
                  <button
                    id="btn-unfollow"
                    onClick={() => unFollowUser(props.match.params.id)}
                  >
                    Se désabonner
                  </button>
                ) : (
                  <button
                    id="btn-follow"
                    onClick={() => followUser(props.match.params.id)}
                  >
                    Suivre
                  </button>
                )}

                <div id="user-report">
                  <a onClick={() => setShowSignalerPopUp(true)}>Signaler</a>
                </div>
              </div>
            </div>
            <div className="top-right">
              <div className="userProfile-note">
                <div id="user-rate">
                  <h3>Evaluer moi</h3>
                  <p>
                    <Rating
                      name="customized-empty"
                      precision={1}
                      onChange={(event, newValue) => {
                        rateUser({ avis: newValue }, props.match.params.id);
                      }}
                      size="large"
                      value={visitedProfileInfo.actualRate}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="abonnéVisitedProfile-topSmallDevice">
            <div className="top-left">
              <img
                src={`http://localhost:8000/${visitedProfileInfo.profileInfo.imageProfile}`}
                alt=""
              />
            </div>
            <div className="top-middle">
              <div className="userProfile-info">
                <div id="user-name">
                  <h2>
                    {visitedProfileInfo.profileInfo.firstName}{" "}
                    {visitedProfileInfo.profileInfo.lastName}
                  </h2>
                  <p>
                    {calucleAge(visitedProfileInfo.profileInfo.dateOfBirth)} ans
                  </p>
                </div>
                <div id="user-adresse">
                  <LocationOnIcon id="userLoc-icon" />
                  {/* <p>{Data.abonnéProfile.adress} ans</p> */}
                </div>
              </div>
              <div className="userProfile-rank">
                <div id="user-avis">
                  <h3>Avis</h3>
                  {visitedProfileInfo.totalRate}
                </div>
                <div id="user-score">
                  <h3>Score</h3>
                  <p>{visitedProfileInfo.profileInfo.userScore}</p>
                </div>
              </div>
              <div className="userProfile-action">
                <div id="user-sendMessage">
                  <a>
                    <ChatBubbleOutlineIcon id="user-chatIcon" />
                    Envoyer un Message
                  </a>
                </div>
                {visitedProfileInfo.isAlreadyFollowed ? (
                  <button
                    id="btn-unfollow"
                    onClick={() => unFollowUser(props.match.params.id)}
                  >
                    Se désabonner
                  </button>
                ) : (
                  <button
                    id="btn-follow"
                    onClick={() => followUser(props.match.params.id)}
                  >
                    Suivre
                  </button>
                )}{" "}
                <div id="user-report">
                  <a onClick={() => setShowSignalerPopUp(true)}>Signaler</a>
                  <SignalPopUp
                    show={showSignalerPopUp}
                    onHide={() => setShowSignalerPopUp(false)}
                    userId={props.match.params.id}
                  />
                </div>
              </div>
            </div>
            <div className="top-right">
              <div className="userProfile-note">
                <div id="user-rate">
                  <h3>Evaluer moi</h3>
                  <p>
                    <Rating
                      name="customized-empty"
                      precision={1}
                      onChange={(event, newValue) => {
                        rateUser({ avis: newValue }, props.match.params.id);
                      }}
                      size="large"
                      value={visitedProfileInfo.actualRate}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="abonnéVisitedProfile-middel">
            <h2>Centre d’interet</h2>
            <div id="user-interset">
              <Container fluid>
                <Row xs={2} md={3} lg={4}>
                  {visitedProfileInfo.profileInfo.centreInteret &&
                    visitedProfileInfo.profileInfo.centreInteret.map(
                      (item, index) => {
                        return (
                          <Col xs={6} md={4} lg={3}>
                            <div id="profilecategory" key={index}>
                              {item}
                            </div>
                          </Col>
                        );
                      }
                    )}
                </Row>
              </Container>
            </div>
          </div>
          <div className="abonnéVisitedProfile-bottom">
            <h2>Activité Organisées</h2>
            <Carousel
              pagination={false}
              itemPadding={[0, 5]}
              breakPoints={breakPoints}
            >
              {Act.length > 0 &&
                Act.map((item, index) => {
                  return (
                    <PubCard
                      editPubOption={false}
                      editPermission={false}
                      act={item}
                      key={index}
                      detailOnClickIcon={(e) => handleDetailClick(e, item)}
                    />
                  );
                })}
            </Carousel>
          </div>
          <PubDetailPopUp
            show={detailPubModalShow}
            data={eventClicked}
            participat={true}
            user={pubOrganisateur}
            onHide={() => setDetailPubModalShow(false)}
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default AbonnéVisitedProfile;
