import React, { Component, useState, useEffect } from 'react';
import './Main.scss';

const SplashPage = () => {
  return (
    <div className="main-content">
      <div className="one-liner">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quidem. Lorem ipsum
          dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="install-instructions">
        <p>npm install loql</p>
      </div>
      <div className="package-features">
        <div className="feature">
          <p>Feature 1</p>
        </div>
        <div className="feature">
          <p>Feature 2</p>
        </div>
        <div className="feature">
          <p>Feature 3</p>
        </div>
        <div className="feature">
          <p>Feature 4</p>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;

