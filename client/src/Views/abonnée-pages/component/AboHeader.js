import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

function AboHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="abonné-Header" fixed="top">
      <Navbar.Brand className="">
        <h2>Bienvenu, Jones</h2>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbar-collpase"
        id="navbar-collapse-small-device"
      />

      <Nav className=" justify-content-center align-middle  ml-auto">
        <div className="aboHeader-searsh">
          <div className="searshSelect">
            <select id="dropdown-searshOption">
              <option>Annonce</option>
              <option>Activity</option>
              <option>Evenement</option>
              <option>Abonné</option>
            </select>
          </div>

          <input type="text" placeholder=" Recherche" />
          <div className="aboHeader-searshIcon">
            <SearchIcon id="searshIcon" />
          </div>
        </div>
      </Nav>
      <Navbar.Toggle
        aria-controls="navbar-collpase"
        id="navbar-collapse-lg-device"
      />
      <Navbar.Collapse className="justify-content-center" id="navbar-collpase">
        <Nav className="ml-auto">
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
    </Navbar>
  );
}

export default AboHeader;
