import React from 'react'
import { Row, Col } from 'tinper-bee'

import Header from './Header'
import Nav from './Nav'
import Breadcrumb from './Breadcrumb'

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
          <div style={{ marginTop: "50px"}}>
            <Breadcrumb />
            <div style={{  backgroundColor: "#e3e8f7" }}>
              { props.children }
            </div>
          </div>

        </Col>
    </Row>
  </div>
)
