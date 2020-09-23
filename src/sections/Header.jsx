import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Text } from '../containers/Language';

import LanguageSelector from '../components/LanguageSelector';
import SmoothScroll from '../components/SmoothScroll';

import logo from '../assets/icons/logo.svg';

function Header() {
  return (
    <header className="header fixed-top">
      <Container className="d-flex justify-content-end">
        <Navbar expand="lg" variant="dark">
          <img className="header-logo" src={logo} alt="Mikhail Karyamin" />
          <Navbar.Toggle aria-controls="navigationBar" />
          <Navbar.Collapse id="navigationBar">
            <Nav className="ml-auto" as="ul">
              <Nav.Item as="li">
                <SmoothScroll href="#home" className="nav-link">
                  <Text section="header" value="home" />
                </SmoothScroll>
              </Nav.Item>
              <Nav.Item as="li">
                <SmoothScroll href="#about" className="nav-link">
                  <Text section="header" value="about" />
                </SmoothScroll>
              </Nav.Item>
              <Nav.Item as="li">
                <SmoothScroll href="#certifications" className="nav-link">
                  <Text section="header" value="certs" />
                </SmoothScroll>
              </Nav.Item>
              <Nav.Item as="li">
                <SmoothScroll href="#experience" className="nav-link">
                  <Text section="header" value="experience" />
                </SmoothScroll>
              </Nav.Item>
              <Nav.Item as="li">
                <SmoothScroll href="#tools" className="nav-link">
                  <Text section="header" value="tools" />
                </SmoothScroll>
              </Nav.Item>
              <Nav.Item as="li">
                <SmoothScroll href="#contact" className="nav-link">
                  <Text section="header" value="contact" />
                </SmoothScroll>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <LanguageSelector />
      </Container>
    </header>
  )
}

export default Header;