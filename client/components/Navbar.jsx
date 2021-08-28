import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const NavBar = () => {
  return (
    <div className="navBar" align="center">
      <div class="navLeft"><Link to="/">LOQL</Link></div>

      <div className="navRight">
        <Link to="/docs">Docs</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/tutorial">Tutorial</Link>
        <Link to="/team">Team</Link>
        <a href="https://github.com/oslabs-beta/loQL/" target="_blank">
          GitHub <i class="fas fa-external-link-alt external"></i>
        </a>
        <a href="INSERT_FINISHED_NPM_LINK_HERE" target="_blank">
          NPM <i class="fas fa-external-link-alt external"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
