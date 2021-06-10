import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="my-navbar" fixed="top">
        <Navbar.Brand>
          <Link to="/">
            <h2>Logo</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collpase" />
        <Navbar.Collapse
          className="justify-content-center"
          id="navbar-collpase"
        >
          <Nav className=" justify-content-center align-middle ">
            <Nav.Link href="#home" className="page-scroll">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link href="#news" className="page-scroll">
              <h4>Nouvautés</h4>
            </Nav.Link>
            <Nav.Link href="#aboutUs" className="page-scroll">
              <h4>A propos</h4>
            </Nav.Link>
            <Nav.Link href="#contact" className="page-scroll">
              <h4>Contact</h4>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/SignIn">
                <button className="nav-signIn">Connexion</button>

                <h4 id="btnSignIn-small-device">Connexion</h4>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/SignUp">
                <button className="nav-signUp">
                  <p>S'inscrire</p>
                </button>
                <h4 id="btnSignUp-small-device">S'inscrire</h4>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
