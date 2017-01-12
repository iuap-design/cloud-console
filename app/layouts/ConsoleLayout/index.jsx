import React from 'react'
import { Row, Col } from 'tinper-bee'

import Header from '../Header'
import Nav from '../Nav'
import Breadcrumb from '../Breadcrumb'

import styles from './index.css'

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
          <div className={ styles.main }>
            <Breadcrumb />
            <div className={ styles.container } >
              { props.children }
            </div>
          </div>
        </Col>
    </Row>
  </div>
)
