import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fade from 'react-reveal/Fade';
import Navbar from './components/navbar';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import Head from './components/head';

const App = (props) => {
  const [width, setWidth] = React.useState('start');

  window.onresize = function (event, vassil) {
    let screenWidth = document.getElementById('root').clientWidth;

    setWidth(() => screenWidth);
  };

  React.useEffect(() => {
    let screenWidth = document.getElementById('root').clientWidth;

    setWidth(screenWidth);
  }, []);
  const RenderComponent = (Comp1, Comp2, newWith) => {
    if (newWith > 993) {
      return <Comp1 />;
    }
    if (newWith < 993) {
      return <Comp2 />;
    }
  };
  return (
    <div className="mainLayout">
      <Navbar />
      <Fade top>
        <Head width={width} RenderComponent={RenderComponent} />
      </Fade>
      <Fade left>
        <About width={width} RenderComponent={RenderComponent} />
      </Fade>
      <Fade right>
        <Skills width={width} RenderComponent={RenderComponent} />
      </Fade>
      <Fade left>
        <Contact />
      </Fade>
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
