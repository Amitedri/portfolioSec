import React from 'react';
import './navbar.css';
import menu from '../../assets/menu.svg';
import logo from '../../assets/logo.svg';
import one from '../../assets/locationImages/one.svg';
import two from '../../assets/locationImages/two.svg';
import three from '../../assets/locationImages/three.svg';
import four from '../../assets/locationImages/four.svg';
import five from '../../assets/locationImages/five.svg';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const head = document.querySelector('.headContainer');
  const about = document.querySelector('.AboutContainer');
  const projects = document.querySelector('.projectsContainer');
  const skills = document.querySelector('.skillsContainer');
  const contact = document.querySelector('.contactContainer');

  const imagesArray = [
    { src: one, value: 'TOP', location: head },
    { src: two, value: 'ABOUT & CV', location: about },
    { src: three, value: 'PORTFOLIO', location: projects },
    { src: four, value: 'SKILLS', location: skills },
    { src: five, value: 'CONTACT', location: contact },
  ];
  const scrollExec = (event, elem) => {
    elem.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    return setIsMenuOpen((prevState) => !prevState);
  };
  const Menu = () => {
    return (
      <div className="overlayMenu">
        <h1 className="menuHeader">Menu</h1>
        <div className="overlayContent">
          {imagesArray.map((item) => {
            return (
              <div className="menuItem" onClick={(event) => scrollExec(event, item.location)}>
                {item.value}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="navBarContainer">
      <div className="menuSection">
        {isMenuOpen ? <Menu /> : null}
        <div className="menuWrapper" onClick={() => setIsMenuOpen((prevState) => !prevState)}>
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div className="logoSection">
        <div className="logoWrapper">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
