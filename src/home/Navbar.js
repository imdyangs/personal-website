import React from "react";
import {TweenMax} from "gsap";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="leftNav">
          <a href="/" className="contact">
            {this.props.isMobile ? <div>david</div> : <div>david yang</div>}
          </a>
        </div>
        <div className="rightNav">
          <a href="/about" className="about">about</a>
          <a href="/contact" className="contact">contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  isMobile: React.PropTypes.bool
};