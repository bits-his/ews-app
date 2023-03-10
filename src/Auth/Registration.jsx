import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Row, Col } from 'reactstrap'
import { login } from '../redux/actions/authActions'
import { _post } from '../utils/Helper'
import './Register.css'

export default function Registration() {
  const goto = useNavigate()
  // const {
  //   auth: { errors },
  // } = useSelector((s) => s)
  const dispatch = useDispatch()
  const [errors, setError] = useState({})
  // const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(false)
  const [display, setDisplay] = useState(false)

  const form = {
    name: '',
    email: '',
    phone1: '',
    password: '',
  }

  const [registrationForm, setRegistration] = useState(form)

  const handleChange = ({ target: { name, value } }) => {
    setRegistration((prev) => ({ ...prev, [name]: value }))
  }
  // function handleEmailChange(e) {
  //   setPerson({
  //     ...person,
  //     firstName: e.target.value,
  //   })
  // }
  // function handleChange(e) {
  //   setPerson({
  //     ...person,
  //     [e.target.name]: e.target.value
  //   });
  // }

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)

    _post(
      `users/create`,
      registrationForm,
      (resp) => {
        // alert(JSON.stringify(resp))
        if (resp.user && resp.user.id) {
          // setLoading(false)
          dispatch(
            login(
              registrationForm,
              (resp) => {
                if (resp.success) {
                  setLoading(false)
                  goto('/profile')
                } else {
                  setLoading(false)
                  alert(resp.success)
                  setNameResult(resp.name)
                  setPhoneResult(resp.phone1)
                  setEmailResult(resp.email)
                  setPasswordResult(resp.password)
                }
              },
              (error) => {
                console.log(error)
              },
            ),
          )
        } else {
          setLoading(false)
          setError(resp)
        }
      },
      (e) => {
        setLoading(false)
        console.log(e)
      },
    )
    // }
  }

  return (
    <div>
      <div className="sign-in-body">
        <form className="">
          {/* {JSON.stringify(errors)} */}
          <>
            <Row>
              {/* <Col md={1}></Col> */}
              <Col md={12}>
                <div className="form-row">
                  <p style={{ color: 'red', fontSize: 12, margin: 0 }}>
                    {errors.name}
                  </p>
                  <input
                    className="mb-4 input_field p-3"
                    type="text"
                    id="org_name"
                    name="name"
                    value={registrationForm.name}
                    onChange={handleChange}
                    placeholder="Organization Name"
                  />
                </div>
                <div className="form-row">
                  <p style={{ color: 'red', fontSize: 12, margin: 0 }}>
                    {errors.phone1}
                  </p>
                  <input
                    className="mb-4 input_field p-3"
                    type="tel"
                    id="org_phone"
                    name="phone1"
                    value={registrationForm.phone1}
                    onChange={handleChange}
                    placeholder="Organization Phone"
                  />
                </div>
                <div className="form-row">
                  <p style={{ color: 'red', fontSize: 12, margin: 0 }}>
                    {errors.email}
                  </p>
                  <input
                    className="mb-4 input_field p-3"
                    type="email"
                    id="org_mail"
                    name="email"
                    value={registrationForm.email}
                    onChange={handleChange}
                    placeholder="Organization Email"
                  />
                </div>
                <div className="form-row">
                  <p style={{ color: 'red', fontSize: 12, margin: 0 }}>
                    {errors.password}
                  </p>
                  <input
                    className="mb-4 input_field p-3"
                    type={display ? 'password' : 'text'}
                    id="password"
                    name="password"
                    value={registrationForm.password}
                    onChange={handleChange}
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
                <div>
                  <button
                    type="submit"
                    className="primary_button"
                    style={{ width: '100%' }}
                    onClick={submit}
                  >
                    {loading ? (
                      <span>Loading...</span>
                    ) : (
                      <span>
                        Register
                        <BiChevronRight size={20} />
                      </span>
                    )}
                  </button>
                </div>
              </Col>
            </Row>
          </>
        </form>
      </div>
    </div>
  )
}
