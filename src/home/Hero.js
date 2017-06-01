import React from "react";
import $ from "jquery";

import Navbar from "./Navbar.js";
import "./Hero.css";

const mobileSize = 650;

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      width: null,
      height: null,
      isMobile: false
    };
  }

  updateDimensions = () => {
    this.setState({
      width: $(window).width(),
      height: $(window).height()
    });
    $(window).width() < mobileSize
      ? this.setState({ isMobile: true })
      : this.setState({ isMobile: false });
  };

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    let isMobile = this.state.isMobile;

    return (
      <div className="container">
        <Navbar isMobile={isMobile} />
        <div className="content">
          <div className="about-me">
            my name is david yang and i aspire to build
            {" "}
            <br />
            {" "}
            scaled, world positive technologies.
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
