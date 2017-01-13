import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux'

import routes from './routers'
import store from './redux/store.js'

import 'tinper-bee/assets/tinper-bee.css'
import './main.css'

let root = document.getElementById('app')

render(
  <Provider store={store}>
    { routes }
  </Provider>, root );
