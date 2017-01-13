import React from 'react';
import ReactDOM, { render } from 'react-dom';

import routes from './routers'
import 'tinper-bee/assets/tinper-bee.css'
import './main.css'

let root = document.getElementById('app')

render( routes, root );
