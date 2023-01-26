import React, { useState } from 'react'
import { Row, Col, Card, ButtonGroup, Button } from 'reactstrap'
import { primaryColor, secondaryColor } from '../Colors'
import './Register.css'
import Registration from './Registration'
import Signin from './Signin'
import logo from '../Images/Knowtify1.png'
export default function Register() {
  const [page, setPage] = useState(false)
  return (
    <div className="sign-in-body">
      <Row className="m-0">
        <Col md={4}></Col>
        <Col md={4} className="">
          <div className="text-center mt-3">
            <img src={logo} className="auth_logo" alt="logo" />
          </div>
          <Card className="card p-4 input shadow mt-3">
            <Row className='mb-3'>
              <div className="switch_div">
                <div>
                  <p
                    className="login_register"
                    style={{
                      borderBottom: '1px solid grey',
                      paddingBottom: 10,
                      width: 'fit-content',
                    }}
                  >
                    <span
                      style={{
                        borderBottom: page
                          ? null
                          : `3px solid ${secondaryColor}`,
                        marginRight: 20,
                        paddingBottom: 10,
                        cursor: 'pointer',
                      }}
                      onClick={() => setPage(false)}
                    >
                      Log in
                    </span>
                    <span
                      style={{
                        borderBottom: page
                          ? `3px solid ${secondaryColor}`
                          : null,
                        marginLeft: 20,
                        paddingBottom: 10,
                        cursor: 'pointer',
                      }}
                      onClick={() => setPage(true)}
                    >
                      Register
                    </span>
                  </p>
                </div>
              </div>
            </Row>
            {!page ? <Signin /> : <Registration />}
            
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}
