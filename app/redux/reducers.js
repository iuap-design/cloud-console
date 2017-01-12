import { combineReducer } from 'redux'

import AppReducer from '../containers/App/reducer.js'

// 将每个组件的 reducer 都导入并 combine 合并后输出
// 在创建 store 的时候引入使用
export default combineReducer({
  AppReducer
})
