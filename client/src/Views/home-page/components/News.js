import React from "react";
import "./News.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NewsActivity from "./NewsActivity";
import NewsAnnonce from "./NewsAnnonce";
import NewsEvent from "./NewsEvent";
import TopThreeUser from "./TopThreeUser";
function News() {
  return (
    <div className="news" id="news">
      <div className="container-fluid">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand>
            <h2>Nouveautés</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link>
                <h4>Top Abonné</h4>
              </Nav.Link>
              <Nav.Link>
                <h4>Annonce</h4>
              </Nav.Link>
              <Nav.Link>
                <h4>Evénement</h4>
              </Nav.Link>
              <Nav.Link>
                <h4>Activité</h4>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="container-fluid my-carousel">
        {/* <TopThreeUser /> */}
        {/* <NewsActivity /> */}
        {/* <NewsAnnonce /> */}
        <NewsEvent />
      </div>
    </div>
  );
}

export default News;
