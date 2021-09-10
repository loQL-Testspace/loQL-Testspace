import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import splashImg from '../assets/loql-animation.gif';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './Main.scss';

const SplashPage = () => {
  return (
    <div className="main-content">
      <Container>
        <article className="main">
          <div className="splash">
            <div id="main-left">
              <div className="bigTitle">Fast, offline GraphQL caching</div>
              <div className="bigDescription">
                loQL is a lightweight, open source npm package that caches API requests with service
                workers, unlocking performance gains and enabling offline use.
              </div>
            </div>
            <div id="main-right">
              <img src={splashImg} className="bike-animation"></img>
              {/* <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_g1mzbfkz.json"  background="transparent"  speed="1" loop autoplay className="bike-animation"></lottie-player> */}
            </div>
          </div>

          <div className="flex-buttons">
            <div className="button1">
              <Link className="button-link1" to="docs">
                Get started
              </Link>
            </div>
            <div className="button2">
              <Link className="button-link2" to="demo">
                Try demo
              </Link>
            </div>
          </div>

          <div>
            <strong>v1.0.0</strong> ·{' '}
            <Link className="gray-link" to="docs">
              Latest docs
            </Link>{' '}
            ·{' '}
            <a href="https://opensourcelabs.io/" target="_blank" className="gray-link">
              All OSLabs releases
            </a>
          </div>
        </article>
      </Container>

      <Container>
        <Row xs={1} md={2} className="g-3 feature-box">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="feature-title">GraphQL</Card.Title>
                <Card.Text>
                  Cache GraphQL APIs from any client (React, Vue, Angular), mobile app or even IoT
                  device.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="feature-title">Universal support</Card.Title>
                <Card.Text>
                  The latest versions of Firefox, Chrome, Opera, Safari and Android fully support
                  service workers and IndexedDB.{' '}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="feature-title">Framework agnostic</Card.Title>
                <Card.Text>
                  No vendor lock-in. You can seamlessly connect loQL with any Javascript framework
                  of your choice.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="feature-title">Open source</Card.Title>
                <Card.Text>
                  The entire codebase is available on GitHub and maintained by a team of dedicated
                  developers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SplashPage;
