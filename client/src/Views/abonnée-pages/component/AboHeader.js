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
//routing
import history from "../../../utilis/history";
import { NavLink, useRouteMatch } from "react-router-dom";
//context
import PubContext from "../../../Context/Publication/pubContext";

import AuthContext from "../../../Context/auth/authContext";

//this methode is used for detecting user mouse click out side searsh result
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler); //add event listener

    return () => {
      document.removeEventListener("mousedown", maybeHandler); //remove event listener
    };
  });

  return domNode;
};
function AboHeader() {
  const { url } = useRouteMatch();
  //create a ref
  let domNode = useClickOutside(() => {
    setShowSearchResultDropdown(false);
  });
  //create a ref
  let domNode1 = useClickOutside(() => {
    setShowProfilDopDown(false);
  });
  //(Componenet level State)
  //this state for handeling selected search option
  const [searchOption, setSearchOption] = useState("annonce");

  //(Componenet level State)
  //this state for hide/show search result Dropdown when clicking on the searsh input bar
  const [showSearchResultDropdown, setShowSearchResultDropdown] =
    useState(false);

  //(Componenet level State)
  //this state for hide/show search result Dropdown when clicking on the searsh input bar
  const [showProfilDopDown, setShowProfilDopDown] = useState(false);
  //app level state
  //auth context
  const authContext = useContext(AuthContext);
  const { logout, user } = authContext;
  //pub context
  const pubContext = useContext(PubContext);
  const onLogout = () => {
    logout();
    pubContext.clearAbonnéPub();
    history.push("/");
  };
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="abonné-Header" fixed="top">
      <div>
        <Navbar.Brand>
          <NavLink to={url}>
            <h2>Logo</h2>
          </NavLink>
        </Navbar.Brand>
      </div>
      <div id="navbar-collapse-small-device">
        <Navbar.Toggle aria-controls="navbar-collpase" />
      </div>
      <div>
        <Nav>
          <div className="aboHeader-searsh" ref={domNode}>
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
                <option value="abonné">Abonné</option>
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
              className="searsh-resault"
              style={{ display: showSearchResultDropdown ? "block" : "none" }}
            >
              <ul>
                {data.map((item) => (
                  <li key={item.key}>
                    <a>{item.value}</a>
                  </li>
                ))}
              </ul>
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
                    <LocationOnIcon id="chatIcon" Style={{}} />
                  </div>
                </NavLink>
              </div>
              <h4 id="btnChat-small-device">Boite Message</h4>
            </Nav.Link>
            <Nav.Link>
              <div className="header-chatIcon">
                <ChatBubbleOutlineIcon id="chatIcon" />
              </div>
              <h4 id="btnChat-small-device">Boite Message</h4>
            </Nav.Link>
            <Nav.Link>
              <div className="header-notifIcon">
                <NotificationsIcon id="notifIcon" />
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
                ref={domNode1}
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
