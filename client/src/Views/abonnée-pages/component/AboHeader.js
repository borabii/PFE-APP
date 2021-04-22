import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

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
  //this state for handeling selected search option
  const [searchOption, setSearchOption] = useState("annonce");

  //this state for hide/show search result Dropdown when clicking on the searsh input bar
  const [showSearchResultDropdown, setShowSearchResultDropdown] = useState(
    false
  );
  let domNode = useClickOutside(() => {
    setShowSearchResultDropdown(false);
  });
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
          <h2>Logo</h2>
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
                src="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/istock_000016994756small.jpg?itok=yczzK-18"
                alt=""
                className="userPicture"
              />
              <h4 id="btnProfil-small-device">Profile</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default AboHeader;
