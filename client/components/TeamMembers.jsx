import React from 'react';
import './TeamMembers.scss';
import jae from '../assets/jae.jpg';
import ak from '../assets/AK.jpg';
// import kh from '../kh.jpg';

const TeamMembers = () => {
  {
    /*Add headshots and socials*/
  }

  return (
    <div id="card-inner-container">
      <div className="card">
        <img className="photo" src={jae} width="200" height="" />
        <div className="socials">
          <a href="https://github.com/jae-ryu" target="_blank">
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jaeryu/ " target="_blank">
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
        </div>
        <p className="name">Jae Ryu</p>
        <p className="subtext">Co-founder/Software Engineer</p>
      </div>
      <div className="card">
        <img className="photo" />
        <div className="socials">
          <a href="https://github.com/harrisoncramer" target="_blank">
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/harrison-cramer/" target="_blank">
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/harrisoncramer" target="_blank">
            <i className="fab fa-2x fa-twitter-square"></i>
          </a>
        </div>
        <p className="name">Harrison Cramer</p>
        <p className="subtext">Co-founder/Software Engineer</p>
      </div>
      <div className="card">
        <i className="fas fa-user-alt fa-9x photo"></i>
        <div className="socials">
          <a href="https://github.com/lolfill" target="_blank">
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/andrew-f-lee/" target="_blank">
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/fill_LOL" target="_blank">
            <i className="fab fa-2x fa-twitter-square"></i>
          </a>
        </div>
        <p className="name">Andrew Lee</p>
        <p className="subtext">Co-founder/Software Engineer</p>
      </div>
      <div className="card">
        <img className="photo" src={ak} width="200" height="250" />
        <div className="socials">
          <a href="https://github.com/andrewkess" target="_blank">
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/andrewkessinger/" target="_blank">
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
        </div>
        <p className="name">Andrew Kessinger</p>
        <p className="subtext">Co-founder/Software Engineer</p>
      </div>
      <div className="card">
        {/* <img className="photo" src={kh}/> */}
        <div className="socials">
          <a href="https://github.com/uitie" target="_blank">
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/konstantinhamilton/" target="_blank">
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
        </div>
        <p className="name">Konstantin Hamilton</p>
        <p className="subtext">Co-founder/Software Engineer</p>
      </div>
    </div>
  );
};

export default TeamMembers;

