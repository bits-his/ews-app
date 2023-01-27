import React from 'react'
import './Register.css'
import { BiChevronRight } from 'react-icons/bi'
import { Row, Col, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
export default function SignIn() {
  const goto = useNavigate()
  const {
    auth: { errors },
  } = useSelector((s) => s)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [display, setDisplay] = useState(false)
  const [emailResult, setEmailResult] = useState('')
  const [passwordResult, setPasswordResult] = useState('')
  const [signinForm, setSigninForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setSigninForm((prev) => ({ ...prev, [name]: value }))
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(signinForm)
    setLoading(true)
    dispatch(
      login(
        signinForm,
        (resp) => {
          if (resp.success) {
            setLoading(false)
            goto('/dashboard')
          } else {
            setLoading(false)
            alert(resp.email ? resp.email : resp.password)
            setEmailResult(resp.email)
            setPasswordResult(resp.password)
          }
          console.log(resp)
        },
        (e) => {
          setLoading(false)
          // alert(JSON.stringify(e))
          console.log(e)
        },
      ),
    )
  }
  return (
    <div>
      <div className="signin-main">
        <div className="sign-in-body">
          {/* {JSON.stringify({ errors })} */}
          <form>
            <>
              <Row>
                {/* <Col md={1}></Col> */}
                <Col md={12}>
                  <div className="form-row">
                    <p style={{ color: 'red', margin: 0, fontSize: 12 }}>
                      {errors.email}
                    </p>
                    <input
                      className="mb-4 input_field p-3"
                      id="username"
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={signinForm.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <p style={{ color: 'red', margin: 0, fontSize: 12 }}>
                      {errors.password}
                    </p>
                    <input
                      className="mb-4 input_field p-3"
                      id="password"
                      type={display ? 'text' : 'password'}
                      placeholder="password "
                      name="password"
                      value={signinForm.name}
                      onChange={handleChange}
                    />
                    <i
                      className={
                        display ? 'fa fa-eye' : 'fa-solid fa-eye-low-vision'
                      }
                      style={{ marginLeft: -43, marginTop: 30 }}
                      onClick={() => setDisplay(!display)}
                    ></i>
                    <div className="text-center mt-3">
                      <p className="auth_info p-0">
                        Forget password? | Click here to reset.
                      </p>
                    </div>
                    <button
                      className="primary_button"
                      style={{ width: '100%' }}
                      onClick={submit}
                    >
                      {loading ? (
                        <span>Loading...</span>
                      ) : (
                        <span>
                          Go <BiChevronRight size={20} />
                        </span>
                      )}
                    </button>
                  </div>
                </Col>
                {/* <Col md={1}></Col> */}
              </Row>
            </>
          </form>
        </div>
      </div>
    </div>
  )
}
