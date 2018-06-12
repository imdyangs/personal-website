import React, { Component } from 'react';
import logo from './asdf.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className="left">
            <div className="logo">
              <img src={logo} style={{ width: '40px' }} alt="" />
            </div>
            <div className="slack">slack</div>
          </div>
          <div className="right">
            <div className="product">Product</div>
            <div className="product">Pricing</div>
            <div className="product">Support</div>
            <div className="shit">Workspace</div>
          </div>
        </div>
        <div className="body">
          <div className="wrapper">
            <div className="box">
              <div className="title">Sign in to your workspace</div>
              <div className="fuck">Enter your workspace’s Slack URL.</div>
              <input className="inputter" type="text" placeholder="your-workspace-url"/>.slack.com
              <div className="continue">
                <button>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
