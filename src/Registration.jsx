import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'

import { Row, Col, Button } from 'reactstrap'
import './Register.css'

export default function Registration() {
  const [value, setValue] = useState(null)
  const [display, setDisplay] = useState(false)
  const [form, SetForm] = useState({
    org_name: '',
    org_phone: '',
    org_mail: '',
    password: ''
  })

  const registrationForm = [
    {
      name: '',
      email: '',
      phone1: '',
      password: '',
    },
  ]

  const handleAdd = (e) => {
        e.preventDefault()
        if(
            form.org_name === '' || 
            form.org_phone === '' || 
            form.org_mail === '' || 
            form.password === '' 
        ){
          alert('All values are required')
        }
        if(form.org_name&&form.org_phone&&form.org_mail&&form.password){
          SetForm({
            org_name: '',
            org_phone: '',
            org_mail: '',
            password: ''
          })
        }
  }

  function handle(e) {
        const newData = {...form}
        newData[e.target.id ] = e.target.value
        SetForm(newData)
        console.log(newData);
  } 
  return (
    <div>
      <div className="sign-in-body">
        <form className="" onSubmit={handleAdd}>
          <>
            <Row>
              {/* <Col md={1}></Col> */}
              <Col md={12}>
                <div className="form-row">
                  <input
                    className="mb-4 input_field p-3"
                    type="text"
                    id='org_name'
                    value={form.org_name}
                    onChange={(e)=> handle(e)}
                    placeholder="Organization Name"
                  />
                </div>
                <div className="form-row">
                  <input
                    className="mb-4 input_field p-3"
                    type="tel"
                    id='org_phone'
                    value={form.org_phone}
                    onChange={(e)=> handle(e)}
                    placeholder="Organization Phone"
                  />
                </div>
                <div className="form-row">
                  <input
                    className="mb-4 input_field p-3"
                    type="email"
                    id='org_mail'
                    value={form.org_mail}
                    onChange={(e)=> handle(e)}
                    placeholder="Organization Email"
                  />
                </div>
                <div className="form-row">
                  <div className="d-flex">
                    <input
                      className="mb-4 input_field p-3"
                      type={display ? 'password' : 'text'}
                      id='password'
                      value={form.password}
                      onChange={(e)=> handle(e)}
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
