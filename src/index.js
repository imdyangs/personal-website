import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './about/About';
import Hero from './home/Hero';
import Projects from './projects/Projects';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './index.css';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Hero} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
