import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/icons/logo.svg';

function Header() {
  return (
    <header className="header">
      <Container>
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="#">
            <img src={logo} alt="Mikhail Karyamin" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navigationBar" />
        <Navbar.Collapse id="navigationBar">
          <Nav className="ml-auto" as="ul">
            <Nav.Item as="li">
              <a href="#" className="nav-link">
                Home
              </a>
            </Nav.Item>
            <Nav.Item as="li">
              <a href="#" className="nav-link">
                About
              </a>
            </Nav.Item>
            <Nav.Item as="li">
              <a href="#" className="nav-link">
                Education
              </a>
            </Nav.Item>
            <Nav.Item as="li">
              <a href="#" className="nav-link">
                Experience
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header;