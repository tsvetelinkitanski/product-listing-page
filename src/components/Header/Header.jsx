import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownFilter from "../Dropdown/DropdownFilter";
import DropdownSort from "../Dropdown/DropdownSort";
import { Link } from "react-router-dom";

function Header({ onSort }) {
  return (
    <div className="d-flex flex-column mt-5">
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            NobleFit
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/man-page">
                Man
              </Nav.Link>
              <Nav.Link as={Link} to="/woman-page">
                Woman
              </Nav.Link>
              <Nav.Link as={Link} to="/sale-page">
                Sale
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex pt-5 justify-content-between align-items-center">
        <div className=" col-9">
          <DropdownFilter />
        </div>
      </div>
    </div>
  );
}

export default Header;
