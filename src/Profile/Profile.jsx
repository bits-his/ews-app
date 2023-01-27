import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Col, Row } from 'reactstrap'
import org_logo from '../Images/profile.jpg'
export default function Profile() {
  const { user } = useSelector((p) => p.auth)

  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        <Row>
          <Col md={6}>
            <h3 className="card_title mb-4">Profile</h3>
          </Col>
          <Col md={6}></Col>
        </Row>
        {JSON.stringify({ user })}

        <Row>
          <Col md={12}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={org_logo} alt="org_logo" className="org_logo" />
              <p className="profile_name">{user.name}</p>
              <p style={{ display: 'inline-block' }}>{user.email}</p>
            </div>
            <p>{user.phone1}</p>
            <p>{user.phone2}</p>
            <p>{user.address}</p>
            <p>{user.website}</p>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
