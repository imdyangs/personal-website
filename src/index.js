import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './about/About';
import Projects from './projects/Projects';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
