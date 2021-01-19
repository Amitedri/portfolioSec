import React from 'react';
import './skills.css';
import projectsImage from '../../assets/slack 1.svg';
import heroku from '../../assets/Icons/heroku.svg';
import express from '../../assets/Icons/express.svg';
import mongoDB from '../../assets/Icons/mongodb.svg';
import react from '../../assets/Icons/react.svg';
import socket from '../../assets/Icons/socket-dot-io.svg';
import node from '../../assets/Icons/node-dot-js.svg';
import javascript from '../../assets/Icons/javascript.svg';
const Skills = ({ width, RenderComponent }) => {
  const skillsList = [
    { name: 'Delegation of assignment', grade: '100' },
    { name: 'Time-Mangment', grade: '100' },
    { name: 'HTML/CSS3', grade: '100' },
    { name: 'Writing skills', grade: '100' },
    { name: 'Product branding', grade: '100' },
    { name: 'Design', grade: '80' },
    { name: 'Office/Windows', grade: '100' },
    { name: 'Computer Skills', grade: '80' },
    { name: 'Presentations', grade: '85' },
    { name: 'Leadership', grade: '85' },
    { name: 'HTML', grade: '70' },
    { name: 'SQL', grade: '70' },
  ];
  const mapSkills = (list) => {
    return list.map((skill) => {
      const grade = (skill.grade * 100) / 100;
      return (
        <div key={skill.name} className="field">
          <span className="fieldName">{skill.name}</span>
          <span style={{ width: `${grade}%`, filter: { brightness: `${grade}%` } }} className="grade"></span>
        </div>
      );
    });
  };

  const mapIcons = () => {
    const icons = [heroku, javascript, node, express, mongoDB, react, socket];
    return icons.map((item) => {
      return (
        <div className="skillsIconWrapper">
          <img src={item} alt={item} />
        </div>
      );
    });
  };
  const DisplayMobileSkills = () => {
    return (
      <div className="skillsContent">
        <div className="skillsHeader">
          <h1>My Skills</h1>
          <div className="skillsImageWrapper">
            <img className="projectsImage" src={projectsImage} alt="projectImage" />
          </div>
        </div>
        <div className="rightPoll"></div>
        <div className="skillsLayout">{mapSkills(skillsList)}</div>
        <div className="leftPoll"></div>
        <div className="skillsIcons">{mapIcons()}</div>
      </div>
    );
  };
  const DisplayDesktopSkills = () => {
    return <div className="skillsContent">
      <div className='skillsHeaders'>
        <h1 className='skillsHeader'>My Skills</h1>
      </div>
      <div className='skillsLayout'>{mapSkills(skillsList)}</div></div>;
  };
  return (
    <div className="skillsContainer">
      {RenderComponent(DisplayDesktopSkills, DisplayMobileSkills, width)}
    </div>
  );
};

export default Skills;
