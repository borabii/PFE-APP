import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ReactSearchBox from "react-search-box";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
function AboHeader() {
  const [showInfo, setshowInfo] = useState(false);
  let domNode = useClickOutside(() => {
    setshowInfo(false);
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
              <select id="dropdown-searshOption">
                <option>Annonce</option>
                <option>Activity</option>
                <option>Evenement</option>
                <option>Abonné</option>
              </select>
            </div>

            <input
              type="text"
              placeholder=" Recherche"
              onClick={() => setshowInfo((showInfo) => !showInfo)}
            />
            <div className="aboHeader-searshIcon">
              <SearchIcon id="searshIcon" />
            </div>
            <div
              className="searsh-resault"
              style={{ display: showInfo ? "block" : "none" }}
            >
              <ul>
                {data.map((item) => (
                  <li key={item.key}>
                    <a onClick={console.log("hhhh")}>{item.value}</a>
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
