import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logoUrl from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="navbar">
      <Container>
        <Navbar.Brand className="navbar-brand">
          <img
            src={logoUrl}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Link className="logo-title" to="/">
            loQL
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navigation-link" to="/docs">
              Docs
            </Link>
            <Link className="navigation-link" to="/demo">
              Demo
            </Link>
            <Link className="navigation-link" to="/team">
              Team
            </Link>
          </Nav>
          <Nav>
            <Nav.Link className="external" href="https://github.com/oslabs-beta/loQL/">
              Github
            </Nav.Link>
            <Nav.Link className="external" href="npm.com">
              NPM
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
