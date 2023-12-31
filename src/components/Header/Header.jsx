import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex flex-column mt-5">
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="./images/Logo.jpg"
              className="d-flex w-25 pl-3 pr-3"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="font-weight-bold" as={Link} to="/man-page">
                Men
              </Nav.Link>
              <Nav.Link className="font-weight-bold" as={Link} to="/woman-page">
                Woman
              </Nav.Link>
              <Nav.Link className="font-weight-bold" as={Link} to="/sale-page">
                Sale
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex pt-5"></div>
    </div>
  );
}

export default Header;
