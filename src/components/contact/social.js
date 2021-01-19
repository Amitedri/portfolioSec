import React from 'react';
import './social.css';
// Icons
import lnkdinIcon from '../../assets/linkedin.svg';
import faceboomIcon from '../../assets/facebook.svg';
import insIcon from '../../assets/instagram.svg';

const SocialIcons = () => {
  return (
    <div className="iconsContainer">
      <div className="iconWrapper">
        <img src={faceboomIcon} alt="" />
      </div>
      <div className="iconWrapper">
        <img src={lnkdinIcon} alt="" />
      </div>
      <div className="iconWrapper">
        <img src={insIcon} alt="" />
      </div>
    </div>
  );
};

export default SocialIcons;
