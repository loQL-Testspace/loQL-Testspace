import React, { Component, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import splashImg from '../assets/hosting.png';
import './Main.scss';

const SplashPage = () => {
  return (
    <div className="main-content">



<Container>


      <article className="main">

<div className="splash">

          <div><div className="bigTitle">Fast, performant GraphQL caching</div>
          <div className="bigDescription">
          loQL is a lightweight, open source npm package that caches API requests with service workers, unlocking performance gains and enabling offline use.
          </div></div>
          <div><img src={splashImg} className="splash-img"></img></div>


          </div>

          <div className="flex-buttons">

          <div className="button1"><a href="#" className="button-link1">Get started</a></div>
          <div className="button2"><a href="#" className="button-link2">Try demo</a></div>
        </div>

          <div>Currently <strong>v1.0.0</strong> · <a href="#" className="gray-link">v4.6.x docs</a> · <a href="#" className="gray-link">All releases</a></div>
       



      </article>    
      </Container>

<Container>
      <div className="package-features">
        <div className="feature">
          <p>GraphQL or Restful</p>
          Cache GraphQL or Restful APIs from any client (React, Vue, Angular), mobile app or
even IoT device.
        </div>
        <div className="feature">
          <p>Universal support</p>
          The latest versions of Firefox, Chrome, Opera, Safari and Android fully support service workers and IndexedDB.
        </div>
        <div className="feature">
          <p>Framework agnostic</p>
          No vendor lock-in or complicated configuration. You can seamlessly connect loQL with any Javascript framework of your choice.
        </div>
        <div className="feature">
          <p>Open source</p>
          The entire codebase is available on GitHub and maintained by
a team of dedicated developers.
        </div>
      </div>
      </Container>
    </div>
    
  );
};

export default SplashPage;

