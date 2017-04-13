import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './App';

import './index.css';

function PageNotFound() {
  return <p>The page you are looking for has not been found!</p>
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='*' component={PageNotFound} />
  </Router>
), document.getElementById('root'));
