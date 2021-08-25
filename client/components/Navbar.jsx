import React from 'react';
//TODO
//Left Side
  //add brand image that redirects us to our home page
//Right Side
  //About, Docs, Learn?, Team, Github, Npm
const NavBar = () => {
  
  return (
    <div className='navBar'>
      <div className='navLeft'>
        <img id='brand' />
      </div>
      <div className='navRight'>
        <div>
          <a href='#'>Docs</a>
          <a href='#'>Demo</a>
          <a href='#'>Tutorial</a>
          <a href='#'>Team</a>
        </div>
          <div className='name'>
            <a href='#'></a>
            <a href='#'></a>
          </div>
      </div>
    </div>
  )
};

export default NavBar;