import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import React from 'react'

import ConsoleLayout from '../layouts/ConsoleLayout'
import Home from '../views/Home.jsx'
import DeployList from '../views/DeployList.jsx'

// const loadPageAsync = pageName => (location, cb) => {
//     let bundle = require('bundle?lazy!./containers/' + pageName)
//     bundle(component => {
//         cb(null, component)
//     })
// }

export default (
  <Router history={hashHistory}>
    <Route path="/" component={ConsoleLayout}>
      <IndexRoute component={Home} />
      <Route path="list" component={DeployList} />
    </Route>
  </Router>
)
