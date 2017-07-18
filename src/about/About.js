import React from 'react';
import { Power2, TimelineLite, Power4 } from 'gsap';

import './About.css';

class About extends React.Component {
  componentDidMount() {}

  render() {
    console.log('ok');
    return (
      <div className="aboutContent">
        <div className="bio">
          <div className="bioHeader">Hey there.</div>
          <div className="bioContent">
            <br />
            I’m a computer engineering student at the University of Waterloo and
            I'm obsessed with designing and building functional systems to scale.
            <br />
            <br />
            I aspire to leverage data and technology for social good and
            if you're interested in sustainability or tech policy, I'd love to talk.
            <br />
            <br />
            At heart I’m a jazz musician, chef and most importantly,
            a student for the rest of my life.
          </div>
        </div>
        <div className="projects">
          {/*<div className="projectHeader">Things I've done.</div>*/}
          <div className="projectList">
          </div>
        </div>
      </div>
    );
  }
}

export default About;
