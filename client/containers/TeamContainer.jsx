import React from 'react';
import TeamMembers from '../components/TeamMembers';
import './TeamContainer.scss';

const Team = () => {
  return (
    <div id="team-content">
      <div id="team-summary">
        <div>
          <h1>Meet the team behind loQL</h1>
          <p className="subtext">
            loQL is developed and maintained by a group of full stack engineers that are passionate
            about learning new technologies and creating useful developer tools.
          </p>
        </div>
        <img /> {/*Some sort of logo image*/}
      </div>
      <div id="team-container">
        <TeamMembers id="team-cards" />
      </div>
    </div>
  );
};

export default Team;

