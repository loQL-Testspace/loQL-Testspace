import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.scss';

const NavigationBar = () => {
  return (
    <Navbar expand="sm" className="navbar navbar-top">
      <Container>
        <Navbar.Brand className="navbar-brand">
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
          <Nav className="icons">
            <Nav.Link className="external" href="https://github.com/oslabs-beta/loQL/">
              <i className="fab fa-github"></i>
            </Nav.Link>
            <Nav.Link className="external" href="https://www.npmjs.com/package/loql-cache">
              <i className="fab fa-npm"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
