import { createStore } from 'redux'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from './reducers.js'

let store = createStore( reducer, applyMiddware(
  createLogger(),
  thunk
) )

export default store
