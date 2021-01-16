import React, { useEffect } from 'react';
import './about.css';
import me from '../../assets/me.PNG';
const About = () => {
  return (
    <div className="AboutContainer">
      <div className="aboutContent">
        <h2> Creative Project Manager</h2>
        <h1>About me</h1>
        <p>
          My name is Elia, And i have been a project manager for 5 years now. i like to see my job as my way express my
          self and seeing it more like a mission then a job
          <br />
          my value became apperant to team leaders/Mangers after managing time efficiently and keeping targets on-sight
          and meeting deadlines.
        </p>
        <p>
          i worked in variary of workplace from startups to corporation. my goal is to land myself on a new position,
          and create great products.
        </p>
        <p>
          Im using the most recent frameworks/Libararies but never stop learning and expanding my knowledge. If you
          think there is a good match, get my cv and let's talk.
        </p>
        {/* replce cv!! */}
        <button
          href="https://drive.google.com/file/d/181i76vGyU9pOvwGUiDr-RyDqdt_EPSdH/view?usp=sharing"
          className="cvButton"
        >
          DOWNLOAD CV
        </button>
      </div>
      <div className="photo">
        <img src={me} alt="myself" />
      </div>
    </div>
  );
};

export default About;
