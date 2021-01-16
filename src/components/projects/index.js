import React from 'react';
import './projects.css';
import arrow from '../../assets/arrow.svg';
import chatty from '../../assets/chattyFront.svg';
import Gallery from './Gallery'
//icons
import heroku from '../../assets/Icons/heroku.svg';
import express from '../../assets/Icons/express.svg';
import mongoDB from '../../assets/Icons/mongodb.svg';
import react from '../../assets/Icons/react.svg';
import socket from '../../assets/Icons/socket-dot-io.svg';
import Header from '../../assets/Group 3 (1).svg';
import Footer from '../../assets/Vector.svg';
const chattyArray = [heroku, express, mongoDB, react, socket];
const meditationAppArray = [heroku, express, mongoDB, react];
const images = [heroku, express, mongoDB, react,react,Footer,heroku, express, mongoDB, react, socket,heroku, express, mongoDB, react, socket];


const Projects = (props) => {
  const mapIcons = (list) => {
    return list.map((item) => {
      return (
        <div className="iconContainer">
          <img src={item} />
        </div>
      );
    });
  };
  
  const SpecialGallery = () => {
    return <div className="galleryContainer">
        <Gallery/>
    </div>;
  };
  // const [width, setWidth] = React.useState('start');
  const DisplayMobileProjects = () => {
    return (
      <div className="projectsContent">
        <div className="projectsHeader">
          <img src={Header} alt="header" />
        </div>
        <div className="projectWrapper">
          <div className="arrowWrapper">
            <img className="leftArrow" src={arrow} alt={arrow} />
          </div>
          <div className="projects"></div>
          <div className="arrowWrapper ">
            <img className="rightArrow" src={arrow} alt={arrow} />
          </div>
        </div>
        <div className="buildWith">
          <h1 className="buildWithHeader">BUILD WITH:</h1>
          <h2 className="buildWithContent">REACT,EXPRESS</h2>
        </div>
        <div className="footerImage">
          <img src={Footer} alt="footer" />
        </div>
      </div>
    );
  };

  const DisplayDesktopProjects = () => {
    return (
      <div className="projectsContainer">
        <h2>What i do</h2>
        <h1>RECENT PROJECTS</h1>
        <SpecialGallery/>
      </div>
    );
  };

  return (
    <div className="projectsContainer">
      {props.RenderComponent(DisplayDesktopProjects, DisplayMobileProjects, props.width)}
    </div>
  );
};

export default Projects;
