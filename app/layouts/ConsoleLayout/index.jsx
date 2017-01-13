import React from 'react'
import { Row, Col } from 'tinper-bee'

import ConsoleHeader from '../Header'
import SideNav from '../Nav'
import Breadcrumb from '../Breadcrumb'

import styles from './index.css'

export default ( props ) => (
  <div>
    <Row>
        <Col md={12} xs={12} sm={12} >
          <ConsoleHeader />
        </Col>
        <Col
          style={{ backgroundColor: "#c7d5f2", height: "100%" }}
          md={1} xs={2} sm={2} >
          <SideNav />
        </Col>
        <Col
          className="container"
          md={11}
          xs={10}
          sm={10} >
          <div className="main">
            <Breadcrumb />
            <div className="content">
              { props.children }
            </div>
          </div>
        </Col>
    </Row>
  </div>
)
