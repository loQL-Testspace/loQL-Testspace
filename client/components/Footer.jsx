import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Footer.scss';

const Footer = () => {
  return (
    <Navbar bg="light" expand="sm" >
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Navbar.Text>
              Product development accelerated by{' '}
              <a href="https://opensourcelabs.io/" target="_blank">
                OSLabs
              </a>
              . Issues or concerns? Report them to our{' '}
              <a href="https://github.com/oslabs-beta/loQL" target="_blank">
                {' '}
                GitHub{' '}
              </a>{' '}
            </Navbar.Text>{' '}
          </Nav>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
