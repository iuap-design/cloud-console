import React from 'react'
import { Link } from 'react-router'

import List from '../containers/List'

export default ( props ) => (
  <div>
    <List />
    <Link to="/list"> 我是首页，点我跳转到部署列表页面</Link>
  </div>
)
