import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownFilter from "../Dropdown/DropdownFilter";
import DropdownSort from "../Dropdown/DropdownSort";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">NobleFit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#man">Man</Nav.Link>
              <Nav.Link href="#woman">Woman</Nav.Link>
              <Nav.Link href="#sale">Sale</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="options">
        <div className="filter">
          <DropdownFilter />
        </div>
        <div className="sort">
          <DropdownSort />
        </div>
      </div>
    </div>
  );
}

export default Header;
