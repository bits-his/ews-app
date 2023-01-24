import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'

import { Row, Col, Button } from 'reactstrap'
import './Register.css'

export default function Registration() {
  const [value, setValue] = useState(null)
  const [display, setDisplay] = useState(false)

  const registrationForm = [
    {
      name: '',
      email: '',
      phone1: '',
      password: '',
    },
  ]
  return (
    <div>
      <div className="sign-in-body">
        <form className="">
          <>
            <Row>
              {/* <Col md={1}></Col> */}
              <Col md={12}>
                <div className="form-row">
                  <input
                    className="mb-4 input_field p-3"
                    type="text"
                    placeholder="Organization Name"
                  />
                </div>
                <div className="form-row">
                  <input
                    className="mb-4 input_field p-3"
                    type="tel"
                    placeholder="Organization Phone"
                  />
                </div>
                <div className="form-row">
                  <input
                    className="mb-4 input_field p-3"
                    type="email"
                    placeholder="Organization Email"
                  />
                </div>
                <div className="form-row">
                  <div className="d-flex">
                    <input
                      className="mb-4 input_field p-3"
                      type={display ? 'password' : 'text'}
                      placeholder="Password"
                    />
                    <i
                      className={
                        display ? 'fa fa-eye' : 'fa-solid fa-eye-low-vision'
                      }
                      style={{ marginLeft: -43, marginTop: 30 }}
                      onClick={() => setDisplay(!display)}
                    ></i>
                  </div>
                </div>
                {/* <Button className="btn btn-rounded w-25 input">
                  <BiChevronRight size={45} />
                </Button> */}
                <div>
                  <button
                    type="submit "
                    className="primary_button"
                    style={{ width: '100%' }}
                  >
                    Register
                    <BiChevronRight size={20} />
                  </button>
                </div>
              </Col>
              {/* <Col md={1}></Col> */}
            </Row>
          </>
        </form>
      </div>
    </div>
  )
}
