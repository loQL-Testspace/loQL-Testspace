import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className  ='navLeft'>
        <img id='brand' />
      </div>
      <div className='navRight'>
        <div className="site-links">
          <Link to="/docs">Docs</Link>
          <Link to="/demo">Demo</Link>
          <Link to="/tutorial">Tutorial</Link>
          <Link to="/team">Team</Link>
        </div>
        <div className='external-links'>
          <Link to="https://github.com/oslabs-beta/loQL/tree/harrisoncramer"></Link>
          <Link to="INSERT_FINISHED_NPM_LINK_HERE"></Link>
        </div>
      </div>
    </div>
  )
};

export default NavBar;