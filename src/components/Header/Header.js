import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownToggle from "../Dropdown/DropdownToggle";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
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
      <DropdownToggle />
    </div>
  );
}

export default Header;
