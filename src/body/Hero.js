import React from "react";

import "./Hero.css";

class Hero extends React.Component {
  render() {
    let smallScreen = null;
    window.matchMedia( "(max-width: 400px)" ).matches ? smallScreen = true : smallScreen = false;

    return (
      <div className="container">
        <div className="content">
          <div className="navbar">
            <div className="leftNav">
              <a href="/" className="contact">
                {smallScreen ? <div>david</div> : <div>david yang</div>}
              </a>
            </div>
            <div className="rightNav">
              <a href="/about" className="contact">about</a>
              <a href="/contact" className="contact">contact</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
