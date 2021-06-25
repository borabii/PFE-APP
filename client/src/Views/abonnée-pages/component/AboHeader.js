import React, { useState, useEffect, useRef, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//icon
import NotificationsIcon from "@material-ui/icons/Notifications";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import Badge from "@material-ui/core/Badge";
//compoenet
import NotificationDropDown from "./NotificationDropDown";

//routing
import history from "../../../utilis/history";
import { NavLink, useRouteMatch } from "react-router-dom";
//context
import PubContext from "../../../Context/Publication/pubContext";
import NotifContext from "../../../Context/notification/notifContext";
import AuthContext from "../../../Context/auth/authContext";
import Logo from "../../image/Logo.png";
//this custom hook is used for detecting user mouse click out side searsh result
let useClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    let maybeHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", maybeHandler); //add event listener

    return () => {
      document.removeEventListener("mousedown", maybeHandler); //remove event listener
    };
  }, [ref, onClickOutside]);
};

function AboHeader() {
  const { url } = useRouteMatch();
  //create a ref
  const searshRef = useRef("menu");
  const notifRef = useRef("notif");
  const profileDropDownRef = useRef("dropdown");
  //use custom hook to detect click outside
  useClickOutside(searshRef, () => {
    setShowSearchResultDropdown(false);
  });
  useClickOutside(profileDropDownRef, () => {
    setShowProfilDopDown(false);
  });
  useClickOutside(notifRef, () => {
    setShowNotifDopDown(false);
  });

  //(Componenet level State)
  //this state for handeling selected search option
  const [searchOption, setSearchOption] = useState("annonce");

  //this state for hide/show search result Dropdown when clicking on the searsh input bar
  const [showSearchResultDropdown, setShowSearchResultDropdown] =
    useState(false);

  //this state for hide/show Profile Dropdown when clicking on user Image
  const [showProfilDopDown, setShowProfilDopDown] = useState(false);

  //this state for hide/show notification  Dropdown when clicking on the notif icon
  const [showNotifDopDown, setShowNotifDopDown] = useState(false);

  //app level state
  //auth context
  const authContext = useContext(AuthContext);
  const { logout, user } = authContext;
  //pub context
  const pubContext = useContext(PubContext);
  //notif context
  const notifContext = useContext(NotifContext);
  const { notification, clearNotification, getNotif } = notifContext;
  useEffect(() => {
    getNotif();
  }, []);
  //logout method
  const onLogout = () => {
    logout();
    pubContext.clearAbonnéPub();
    clearNotification();
    history.push("/");
  };
  const data = [
    {
      addresse: "houmt souk,djerba",
      catégorie: "Foot",
      date: "2015-06-18 à 13:30",
    },
    {
      addresse: "sfax",
      catégorie: "Foot",
      date: "2015-06-18 à 15:25",
    },
    {
      addresse: "menzah6,Ariana",
      catégorie: "Foot",
      date: "2015-06-18 à 14:00",
    },
    {
      addresse: "nabeul,Nabeul",
      catégorie: "Foot",
      date: "2015-06-18 à 16:15",
    },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="abonné-Header" fixed="top">
      <div>
        <Navbar.Brand>
          <NavLink to={url}>
            {/* <h2>Logo</h2> */}
            <img src={Logo} style={{ width: "100px", height: "70px" }} alt="" />
          </NavLink>
        </Navbar.Brand>
      </div>
      <div id="navbar-collapse-small-device">
        <Navbar.Toggle aria-controls="navbar-collpase" />
      </div>
      <div>
        <Nav>
          <div className="aboHeader-searsh">
            <div className="searshSelect">
              <select
                id="dropdown-searshOption"
                onChange={(e) => setSearchOption(e.target.value)}
              >
                <option value="annonce" selected="selected">
                  Annonce
                </option>
                <option value="activity">Activity</option>
                <option value="evenement">Evenement</option>
              </select>
            </div>

            <input
              type="text"
              placeholder=" Recherche"
              onClick={() =>
                setShowSearchResultDropdown(
                  (showSearchResultDropdown) => !showSearchResultDropdown
                )
              }
            />
            <div className="aboHeader-searshIcon">
              <SearchIcon id="searshIcon" />
            </div>
            <div
              ref={searshRef}
              className="searsh-resault"
              style={{ display: showSearchResultDropdown ? "block" : "none" }}
            >
              <div className="searsh-dropdown">
                {data.map((item, key) => (
                  <div className="resulatContainer">
                    <div className="resulatContainer-left">
                      {item.catégorie}
                      <p>
                        <LocationOnIcon id="resAddressIcon" />
                        {item.addresse}
                      </p>
                    </div>
                    <div className="resulatContainer-rigth">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Nav>
      </div>

      <div>
        <Navbar.Toggle
          aria-controls="navbar-collpase"
          id="navbar-collapse-lg-device"
        />
        <Navbar.Collapse
          className="justify-content-center"
          id="navbar-collpase"
        >
          <Nav>
            <Nav.Link>
              <div className="header-chatIcon">
                <NavLink
                  to={`${url}/Map`}
                  exact
                  activeStyle={{
                    color: "rgba(0,0,0,.5)  ",
                  }}
                  className="navCollaps-item"
                >
                  <div className="header-chatIcon">
                    {" "}
                    <LocationOnIcon id="chatIcon" />
                  </div>
                </NavLink>
              </div>
              <h4 id="btnChat-small-device">Boite Message</h4>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to={`${url}/BoiteMsg`}
                exact
                activeStyle={{
                  color: "rgba(0,0,0,.5)  ",
                }}
                className="navCollaps-item"
              >
                <div className="header-chatIcon">
                  {" "}
                  <ChatBubbleOutlineIcon id="chatIcon" />
                </div>
              </NavLink>
              <h4 id="btnChat-small-device">Boite Message</h4>
            </Nav.Link>
            <Nav.Link>
              <div className="header-notifIcon">
                <Badge
                  badgeContent={notification !== null ? notification.length : 0}
                  max={20}
                  className="notifbadge"
                  color="secondary"
                >
                  <NotificationsIcon
                    id="notifIcon"
                    onClick={() =>
                      setShowNotifDopDown(
                        (showNotifDopDown) => !showNotifDopDown
                      )
                    }
                  />

                  <NotificationDropDown
                    show={showNotifDopDown}
                    myRef={notifRef}
                    onHide={() => setShowNotifDopDown(false)}
                  />
                </Badge>
              </div>
              <h4 id="btnNotif-small-device">Notification</h4>
            </Nav.Link>
            <Nav.Link>
              <img
                src={
                  user.imageProfile
                    ? `http://localhost:8000/${user.imageProfile}`
                    : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommunity.atlassian.com%2Ft5%2FJira-Software-questions%2FIncorrect-URL-for-avatar-images-after-base-URL-changed%2Fqaq-p%2F705907&psig=AOvVaw0vAcSohhUhW7yz_a6yReaC&ust=1621046886814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjzx7yUyPACFQAAAAAdAAAAABAD"
                }
                alt=""
                className="userPicture"
                onClick={() =>
                  setShowProfilDopDown(
                    (showProfilDopDown) => !showProfilDopDown
                  )
                }
              />
              <h4 id="btnProfil-small-device">
                <NavLink
                  to={`${url}/Compte`}
                  exact
                  activeStyle={{
                    color: "rgba(0,0,0,.5)  ",
                  }}
                  className="navCollaps-item"
                >
                  Mon Compte
                </NavLink>
              </h4>

              <div
                ref={profileDropDownRef}
                className="profile-dropDown"
                style={{ display: showProfilDopDown ? "block" : "none" }}
              >
                <div className="DropDown-body">
                  <div className="dropDown-Option">
                    <NavLink
                      to={`${url}/Compte`}
                      exact
                      activeStyle={{
                        color: "#fea041",
                      }}
                    >
                      <AccountCircleIcon className="dropDown-icon" />
                      Mon Compte
                    </NavLink>
                  </div>
                  {user.isAnnonceur ? (
                    <div className="dropDown-Option">
                      <NavLink
                        to={`${url}/EscpacePub`}
                        exact
                        activeStyle={{
                          color: "#fea041",
                        }}
                      >
                        <AssistantPhotoIcon className="dropDown-icon" />
                        Espace Pubs
                      </NavLink>
                    </div>
                  ) : (
                    <div className="dropDown-Option">
                      <NavLink
                        to={`${url}/FormDemandeEscpacePubs`}
                        exact
                        activeStyle={{
                          color: "#fea041",
                        }}
                      >
                        <AssistantPhotoIcon className="dropDown-icon" />
                        Espace Pubs{" "}
                      </NavLink>
                    </div>
                  )}{" "}
                  <div className="dropDown-Option">
                    <NavLink
                      to={`${url}/MesActivités`}
                      exact
                      activeStyle={{
                        color: "#fea041",
                      }}
                    >
                      <StarBorderIcon className="dropDown-icon" />
                      Mes Activités
                    </NavLink>
                  </div>
                  <div className="dropDown-Option">
                    <a onClick={onLogout}>
                      <ExitToAppIcon className="dropDown-icon" />
                      Déconnexion
                    </a>
                  </div>
                </div>
              </div>
            </Nav.Link>
            {user.isAnnonceur ? (
              <h4
                id="btnProfil-small-device"
                style={{ marginTop: 8, marginBottom: 15 }}
              >
                <NavLink
                  to={`${url}/EscpacePub`}
                  exact
                  activeStyle={{
                    color: "rgba(0,0,0,.5)  ",
                  }}
                  className="navCollaps-item"
                >
                  Espace Pubs{" "}
                </NavLink>
              </h4>
            ) : (
              <h4
                id="btnProfil-small-device"
                style={{ marginTop: 8, marginBottom: 15 }}
              >
                <NavLink
                  to={`${url}/FormDemandeEscpacePubs`}
                  exact
                  activeStyle={{
                    color: "rgba(0,0,0,.5)  ",
                  }}
                  className="navCollaps-item"
                >
                  Espace Pubs{" "}
                </NavLink>
              </h4>
            )}{" "}
            <NavLink
              to={`${url}/MesActivités`}
              exact
              className="navCollaps-item"
            >
              <h4 id="btnProfil-small-device">Mes Activités </h4>
            </NavLink>
            <Nav.Link>
              <h4 id="btnProfil-small-device" onClick={onLogout}>
                Déconnexion
              </h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default AboHeader;
