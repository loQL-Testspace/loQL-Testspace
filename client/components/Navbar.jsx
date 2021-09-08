import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.scss';

const NavigationBar = () => {
  return (
    <Navbar expand="sm" className="navbar navbar-top">
      <Container>
        <Navbar.Brand className="navbar-brand">
          {/* <img
            src={logoUrl}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="loQL logo"
          /> */}
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
<<<<<<< Updated upstream
               <i class="fab fa-github"></i>
            </Nav.Link>
            <Nav.Link className="external" href="https://www.npmjs.com/package/loql-cache">
               <i class="fab fa-npm"></i>
=======
              <i class="fab fa-2x fa-github"/>
            </Nav.Link>
            <Nav.Link className="external" href="npm.com">
              <i class="fab fa-npm fa-2x" />
>>>>>>> Stashed changes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
