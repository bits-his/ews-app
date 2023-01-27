import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Col, Row } from 'reactstrap'

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
      </Card>
    </div>
  )
}
