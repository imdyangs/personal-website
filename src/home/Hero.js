import React from 'react';
import { Power2, TimelineLite, TweenMax } from 'gsap';

import About from '../about/About';
import Contact from '../contact/Contact';

import Navbar from './Navbar.js';
import './Hero.css';

class Hero extends React.Component {
  state = {
    page: 'home'
  };

  constructor(props) {
    super(props);
    this.contact = this.contact.bind(this);
    this.about = this.about.bind(this);
    this.home = this.home.bind(this);
  }

  contact(e) {
    TweenMax.to('.home', 0.4, { opacity: 0 });
    TweenMax.to('.aboutPage', 0.4, { opacity: 0 });
    setTimeout(() => {
      this.setState({
        page: 'contact'
      });
      TweenMax.to('.contactPage', 0.4, { opacity: 1 });
    }, 420);
  }

  about(e) {
    TweenMax.to('.home', 0.4, { opacity: 0 });
    TweenMax.to('.contactPage', 0.4, { opacity: 0 });
    setTimeout(() => {
      this.setState({
        page: 'about'
      });
      TweenMax.to('.aboutPage', 0.4, { opacity: 1 });
    }, 420);
  }

  home(e) {
    TweenMax.to('.aboutPage', 0.4, { opacity: 0 });
    TweenMax.to('.contactPage', 0.4, { opacity: 0 });
    setTimeout(() => {
      console.log('ok');
      this.setState({
        page: 'home'
      });
      TweenMax.to('.home', 0.4, { opacity: 1 });
    }, 420);
  }

  componentDidMount() {
    const aboutMeTimeline = new TimelineLite();
    if (this.props.isMobile) {
      aboutMeTimeline
        .from('#one', 1.2, { opacity: 0, delay: 0.8, ease: Power2.easeIn })
        .from('#two', 1.2, { opacity: 0, ease: Power2.easeIn }, '+=0.1')
        .from('#three', 0.8, { opacity: 0 }, '+=0.6')
        .from('#four', 0.8, { opacity: 0 }, '+=0.4');
    } else {
      aboutMeTimeline
        .from('#one', 1, { opacity: 0, delay: 0.8, ease: Power2.easeIn })
        .from('#two', 1, { opacity: 0, ease: Power2.easeIn }, '-=0.4')
        .from('#three', 1, { opacity: 0, ease: Power2.easeIn }, '-=0.1')
        .from('#four', 1, { opacity: 0, ease: Power2.easeIn }, '-=0.4')
        .from('#five', 0.7, { opacity: 0 }, '+=0.1')
        .from('#six', 0.7, { opacity: 0 }, '+=0.1')
        .from('#seven', 0.7, { opacity: 0 }, '+=0.1');
    }
  }
  render() {
    let body = null;
    if (this.state.page === 'home') {
      if (this.props.isMobile) {
        body = (
          <div className="home">
            <span id="one">my name is <br /> david yang</span>
            {' '}
            <br />
            <span id="two">and i aspire to <br /> build scalable,</span>
            {' '}
            <br />
            <span id="three"> world positive</span>
            {' '}
            <span id="four">technologies.</span>
          </div>
        );
      } else {
        body = (
          <div className="home">
            <span id="one">my name is</span>
            <span id="two"> david yang</span>
            {' '}
            <span id="three"> and i aspire</span>
            {' '}
            <span id="four"> to build </span>
            <br />
            <span id="five">scalable,</span>
            {' '}
            <span id="six">world positive </span>
            <span id="seven">technologies.</span>
          </div>
        );
      }
    }

    if (this.state.page === 'about') {
      console.log('about');
      body = (
        <div className="aboutPage">
          <About />
        </div>
      );
    }

    if (this.state.page === 'contact') {
      console.log('contact');
      body = (
        <div className="contactPage">
          <Contact />
        </div>
      );
    }

    return (
      <div className="container">
        <Navbar
          isMobile={this.props.isMobile}
          handleContact={this.contact}
          handleHome={this.home}
          handleAbout={this.about}
        />
        <div className="content">
          {body}
        </div>
        <div className="footer">
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
      </div>
    );
  }
}

export default Hero;
