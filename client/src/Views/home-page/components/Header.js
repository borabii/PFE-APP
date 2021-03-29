import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="my-navbar" fixed="top">
        <Navbar.Brand>
          <h2>Logo</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav"
        >
          <Nav className=" justify-content-center ">
            <Nav.Link href="#home" className="page-scroll">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link href="#news" className="page-scroll">
              <h4>Nouvautés</h4>
            </Nav.Link>
            <Nav.Link href="#aboutUs" className="page-scroll">
              <h4>About</h4>
            </Nav.Link>
            <Nav.Link href="#contact" className="page-scroll">
              <h4>Contact</h4>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <h4>Connexion</h4>
            </Nav.Link>
            <Nav.Link>
              <button className="nav-signIn">
                <p>S'inscrire</p>
              </button>
              <h4 id="tt">S'inscrire</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <h4>logo</h4>
      <div className="header__nav">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#home" className="page-scroll">
              Home
            </a>
          </li>
          <li>
            <a href="#news" className="page-scroll">
              Top User
            </a>
          </li>
          <li>
            <a href="#aboutUs" className="page-scroll">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="header__option">
        <a>Connexion</a>

        <button className=" btn btn-lg">
          <p>S'inscrire</p>
        </button>
      </div> */}
    </div>
  );
}

export default Header;
