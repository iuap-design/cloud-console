import React from 'react'
import { Row, Col } from 'tinper-bee'

import Header from './Header'
import Nav from './Nav'

export default ( props ) => (
  <div>
    <Row>
        <Col md={12} xs={12} sm={12} >
          <Header />
        </Col>
        <Col md={2} xs={2} sm={2} >
          <Nav />
        </Col>
        <Col md={10}  xs={10} sm={10}>
          { props.children }
        </Col>
    </Row>
  </div>
)
