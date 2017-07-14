import React from "react";
import logo from "./logoNoDsvg.svg";

const imageStyles = {
  paddingTop: '8px',
  width: '44px',
  height: '44px'
}

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="leftNav">
          <img src={logo} alt="" style={imageStyles}/>
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
