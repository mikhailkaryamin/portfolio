import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import SmoothScroll from '../components/SmoothScroll';

import logo from '../assets/icons/logo.svg';

function Header() {
  return (
    <header className="header fixed-top">
      <Container>
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="#">
            <img src={logo} alt="Mikhail Karyamin" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navigationBar" />
        <Navbar.Collapse id="navigationBar">
          <Nav className="ml-auto" as="ul">
            <Nav.Item as="li">
              <SmoothScroll href="#home" className="nav-link">
                Home
              </SmoothScroll>
            </Nav.Item>
            <Nav.Item as="li">
              <SmoothScroll href="#about" className="nav-link">
                About
              </SmoothScroll>
            </Nav.Item>
            <Nav.Item as="li">
              <SmoothScroll href="#certifications" className="nav-link">
                Cert
              </SmoothScroll>
            </Nav.Item>
            <Nav.Item as="li">
              <SmoothScroll href="#experience" className="nav-link">
                Experience
              </SmoothScroll>
            </Nav.Item>
            <Nav.Item as="li">
              <SmoothScroll href="#tools" className="nav-link">
                Tools
              </SmoothScroll>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header;