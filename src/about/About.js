import React from "react";
import { Power2, TimelineLite, Power4 } from "gsap";

import Navbar from "../home/Navbar.js";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar isMobile={this.props.isMobile} />
        <div className="content">
          Hi
        </div>
      </div>
    );
  }
}

export default About;
