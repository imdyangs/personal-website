import React from 'react';
import logo from './logoNoDsvg.svg';

const imageStyles = {
  paddingTop: '4px',
  width: '44px',
  height: '46px',
  cursor: 'pointer',
};

class Navbar extends React.Component {
  onHome = e => {
    e.preventDefault();
    this.props.handleHome();
  };

  onAbout = e => {
    e.preventDefault();
    this.props.handleAbout();
  };

  onContact = e => {
    e.preventDefault();
    this.props.handleContact();
  };

  render() {
    return (
      <div className="navbar">
        <div className="leftNav">
          <a onClick={this.onHome}>
            <img src={logo} alt="" style={imageStyles} />
          </a>
          <a className="contact" onClick={this.onHome}>
            {this.props.isMobile ? <div>david</div> : <div>david yang</div>}
          </a>
        </div>
        <div className="rightNav">
          <a className="about" onClick={this.onAbout}>about me</a>
        </div>
      </div>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  isMobile: React.PropTypes.bool
};
