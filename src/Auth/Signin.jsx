import React from 'react'
import './Register.css'
import { BiChevronRight } from 'react-icons/bi'
import { Row, Col, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signin() {
  const goto = useNavigate()
  const [display, setDisplay] = useState(false)
  const [signinForm, setSigninForm] = useState({
    username: '',
    password: '',
  })
  const handleAdd = (e) => {
    e.preventDefault()
    if (signinForm.username === '' || signinForm.password === '') {
      alert('All values are required')
    }
    if (signinForm.username && signinForm.password) {
      setSigninForm({
        username: '',
        password: '',
      })
    }
  }

  function handle(e) {
    const newData = { ...signinForm }
    newData[e.target.id] = e.target.value
    setSigninForm(newData)
    console.log(newData)
  }

  return (
    <div>
      <div className="signin-main">
        <div className="sign-in-body">
          <form onSubmit={handleAdd}>
            <>
              <Row>
                {/* <Col md={1}></Col> */}
                <Col md={12}>
                  <div class="form-row">
                    <input
                      class="mb-4 input_field p-3"
                      id="username"
                      value={signinForm.username}
                      type="text"
                      placeholder="username"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div class="form-row">
                    <div className="d-flex">
                      <input
                        class="mb-4 input_field p-3"
                        id="password"
                        value={signinForm.password}
                        type={display ? 'password' : 'text'}
                        placeholder="password "
                        onChange={(e) => handle(e)}
                      />
                      <i
                        className={
                          display ? 'fa fa-eye' : 'fa-solid fa-eye-low-vision'
                        }
                        style={{ marginLeft: -43, marginTop: 30 }}
                        onClick={() => setDisplay(!display)}
                      ></i>
                    </div>
                    <button
                      className="primary_button"
                      style={{ width: '100%' }}
                    >
                      Go
                      <BiChevronRight size={20} />
                    </button>
                  </div>
                </Col>
                {/* <Col md={1}></Col> */}
              </Row>
            </>
            <div className="text-center mt-3">
              <p className="auth_info p-0">
                Forget password? | Click here to reset.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
