import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <p>Product development accelerated by <a href="https://opensourcelabs.io/" target="_blank">OS Labs</a></p>    |    <p>Issues or concerns? Report them to our <a href="https://github.com/oslabs-beta/loQL" target="_blank">GitHub</a></p>
    </div>
  );
};

export default Footer;
