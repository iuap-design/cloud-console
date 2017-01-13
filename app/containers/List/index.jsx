import React, { Component } from 'react'
import { connect } from 'react-redux'

import { IncAction, DecAction } from './action.js'

class List extends Component {
  render(){
    return (
      <div>
        <h2> 目前共有 {this.props.listNumber} 台机器在运行中....</h2>
        <button onClick={this.props.inc}> 增加一台机器 </button>
        <button onClick={this.props.dec}> 减少一台机器 </button>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      listNumber: state.List.listNumber
    }
  },
  (dispatch) => {
    return {
      inc: () => dispatch( IncAction() ),
      dec: () => dispatch( DecAction() )
    }
  }
)(List)
