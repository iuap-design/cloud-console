import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import React from 'react'

import Layout from '../layouts/Layout.jsx'
import Home from '../views/Home.jsx'
import DeployList from '../views/DeployList.jsx'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="list" component={DeployList} />
    </Route>
  </Router>
)
