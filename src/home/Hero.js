import React from "react";
import { Power2, TimelineLite, Power4 } from "gsap";

import Navbar from "./Navbar.js";
import "./Hero.css";

class Hero extends React.Component {
  componentDidMount() {
    const aboutMeTimeline = new TimelineLite();
    if (this.props.isMobile) {
      aboutMeTimeline
        .from("#one", 1.2, {opacity:0, delay:0.8, ease:Power2.easeIn})
        .from("#two", 1.2, {opacity:0, ease:Power2.easeIn}, "+=0.1")
        .from("#three", 0.8, {opacity:0}, "+=0.6")
        .from("#four", 0.8, {opacity:0}, "+=0.4")
    } else {
      aboutMeTimeline
        .from("#one", 1.3, {opacity:0, delay:0.8, ease:Power2.easeIn})
        .from("#two", 1, {opacity:0, ease:Power2.easeIn}, "-=0.3")
        .from("#three", 1.2, {opacity:0, ease:Power2.easeIn}, "+=0.2")
        .from("#four", 1, {opacity:0, ease:Power2.easeIn}, "-=0.3")
        .from("#five", 0.8, {opacity:0}, "+=0.3")
        .from("#six", 0.8, {opacity:0}, "+=0.2")
        .from("#seven", 0.8, {opacity:0}, "+=0.2")
    }
  }
  render() {
    return (
      <div className="container">
        <Navbar isMobile={this.props.isMobile} />
        <div className="content">
          <div className="about-me">
            {/*Line Breaks for Web and Mobile*/}
            {this.props.isMobile
              ? <div>
                  <span id="one">my name is <br /> david yang</span>
                  {" "}
                  <br />
                  <span id="two">and i aspire to <br /> build scalable,</span>
                  {" "}
                  <br />
                  <span id="three"> world positive</span>
                  {" "}
                  <span id="four">technologies.</span>
                </div>
              : <div>
                  <span id="one">my name is</span>
                  <span id="two"> david yang</span>
                  {" "}
                  <span id="three"> and i aspire</span>
                  {" "}
                  <span id="four"> to build </span>
                  <br />
                  <span id="five">scalable,</span>
                  {" "}
                  <span id="six">world positive </span>
                  <span id="seven">technologies.</span>
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
