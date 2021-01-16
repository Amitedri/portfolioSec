import React from 'react';
import './head.css';
import background from '../../assets/background2.png';
import SocialIcons from '../contact/social'
const Head = ({width, RenderComponent}) => {
  const scrollToElem = () => {
    const elem = document.querySelector('.contactContainer');
    return elem.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };
  const createColorString = (string) => {
    const stringArr = string.split("");
    return stringArr.map((piece, index) => {
      if (index % 2 === 0 && index && index <= 7 || index === 0) {
        return <span className='colorH2'>{piece}</span>
      }
      else {
        return <span className='normalH2'>{piece}</span>
      }
    })
  }
  const DesktopHead = () => {
    return <div className="contentWrapper">
      <div className='topTextWrapper'>
        <h1 className="topHeader">MAKE IT</h1>
        <h2 className='topHeaderText'>WORK</h2>
      </div>
      <h3 className='secondaryText'>{createColorString('CREATIVE CONTENT IS IN HAND')}</h3>
      <h4 className='bottomText'>I’M Elia, And i'm a product manager that could change how people interact with your products.</h4>
      <h5 className='bottomText sm'>bring complex and simple ideas into life is what i DO.</h5>
      <button className="contactButton" onClick={scrollToElem}>
        DISCOVER
    </button>
    </div>
  }

  const MobileHead = () => {
    return <div className="contentWrapper">
      <div className='introTextContainer'>
        <div className='introH1'>
        <h1 className="topHeader">MAKE IT</h1>
        <h2 className='topHeaderText'>WORK</h2>
        </div>
        <h3 className='topSecondaryText'>{createColorString('CREATIVE CONTENT IS IN HAND')}</h3>
        <h4 className='bottomText'>I’M Elia, And i'm a product manager that could change how people interact with your products.</h4>
      <h5 className='bottomText sm'>bring complex and simple ideas into life is what i DO.</h5>
      </div>
      <button className="contactButton" onClick={scrollToElem}>
        DISCOVER
    </button>
    </div>
  }
  return (
    <div className="headContainer">
      <div className='imageLayer'>
        <img src={background} alt={background} />
      </div>
      {RenderComponent(DesktopHead, MobileHead, width)}
      <SocialIcons/>
    </div>
  );
};

export default Head;
