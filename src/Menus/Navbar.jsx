import React from 'react'
import './Navbar.css'
import profile from '../Images/profile.jpg'
import { Col, Row } from 'reactstrap'
export default function Navbar() {
  return (
    <div className="navbar_">
      <Row className="m-0">
        <Col md={6} className=""></Col>
        <Col md={6} className="">
          <div className="navbar_div">
            <div className="name_profile">
              <p className="ass_name">Association Name</p>{' '}
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
