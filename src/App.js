import React, { Component } from "react";
import $ from "jquery";

import Hero from "./home/Hero";
import "./App.css";

const mobileSize = 650;

class App extends Component {
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
      <div className="App">
        <Hero isMobile={isMobile} />
      </div>
    );
  }
}

export default App;
