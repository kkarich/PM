import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/main';
import Home from '../components/home';

export default class Routes extends React.Component {
  render() {
    return (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      {/*<Route path='join' header='Player One' component={} />*/}
    </Route>
  </Router>
    )
  }
};