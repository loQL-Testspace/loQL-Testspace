import React from "react";
import './TeamMembers.scss';
// import Github from '../assets/Github.svg';
// import Linkedin from '../assets/logo.png';
// import Twitter from '../assets/Logo-blue.png';

const TeamMembers = () => {

  {/*Add headshots and socials*/}

  return (
    <div id="card-inner-container"> 
      <div className="card">
        <img />
        <div className="socials">
          <a href="https://github.com/jae-ryu"  target="_blank" ><i class="fab fa-2x fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jaeryu/ "  target="_blank" ><i class="fab fa-2x fa-linkedin"></i></a>
        </div>
        <p className="name">Jae Ryu</p>
      </div>
      <div className="card">
        <img />
        <div className="socials">
          <a href="https://github.com/harrisoncramer"  target="_blank" ><i class="fab fa-2x fa-github"></i></a>
          <a href="https://www.linkedin.com/in/harrison-cramer/"  target="_blank" ><i class="fab fa-2x fa-linkedin"></i></a>
          <a href="https://twitter.com/harrisoncramer"  target="_blank" ><i class="fab fa-2x fa-twitter-square"></i></a>
        </div>
        <p className="name">Harrison Kramer</p>
      </div>
      <div className="card">
        <img />
        <div className="socials">
          <a href="https://github.com/lolfill"  target="_blank" ><i class="fab fa-2x fa-github"></i></a>
          <a href="https://www.linkedin.com/in/andrew-f-lee/"  target="_blank" ><i class="fab fa-2x fa-linkedin"></i></a>
          <a href="https://twitter.com/fill_LOL"  target="_blank" ><i class="fab fa-2x fa-twitter-square"></i></a>
        </div>
        <p className="name">Andrew Lee</p>
      </div>
      <div className="card">
        <img />
        <div className="socials">
          <a href="https://github.com/uitie"  target="_blank" ><i class="fab fa-2x fa-github"></i></a>
          <a href="https://www.linkedin.com/in/konstantinhamilton/"  target="_blank" ><i class="fab fa-2x fa-linkedin"></i></a>
        </div>
        <p className="name">Andrew Kessinger</p>
      </div>
      <div className="card">
        <img />
        <div className="socials">
          <a href=""  target="_blank" ><i class="fab fa-2x fa-github"></i></a>
          <a href=""  target="_blank" ><i class="fab fa-2x fa-linkedin"></i></a>
        </div>
        <p className="name">Konstantin Hamilton</p>
      </div>
    </div>
  )
}

export default TeamMembers;