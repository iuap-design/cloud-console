import React from 'react'
import { Link } from 'react-router'

export default ( props ) => (
  <div>
    <h3> 我现在是首页 </h3>
    <Link to="/list"> 点我跳转到部署列表页面，现在主要逻辑是先写个部署列表页面和整体的布局出来 </Link>
  </div>
)
