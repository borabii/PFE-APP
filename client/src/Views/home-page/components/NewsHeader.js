import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NewsHeader() {
  return (
    <div>
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
              <Link to="/" id="news-link">
                <h4>Top Abonné</h4>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/NewsAnnonce" id="news-link">
                <h4 id="news-link">Annonce</h4>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/NewsEvent" id="news-link">
                <h4>Evénement</h4>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/NewsActivity" id="news-link">
                <h4>Activité</h4>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NewsHeader;
