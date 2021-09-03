import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logoUrl from "../assets/logo.png";

const NavBar = () => {
  console.log(logoUrl)
  return (
    <div className="navBar">
      <div className="navLeft">
        <img src={logoUrl} className="logo" />
      </div>
      <div className="navRight">
        <Link to="/docs">Docs</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/team">Team</Link>
        <a href="https://github.com/oslabs-beta/loQL/" target="_blank">
          GitHub <i className="fas fa-external-link-alt external"></i>
        </a>
        <a href="INSERT_FINISHED_NPM_LINK_HERE" target="_blank">
          NPM <i className="fas fa-external-link-alt external"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
