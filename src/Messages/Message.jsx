import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardText, Col, Row } from 'reactstrap'
export default function Message() {
  const goto = useNavigate()
  const messageCard = [
    {
      title: 'Sent Messages',
    },
    {
      title: 'Delivered Messages',
    },
    {
      title: 'Failed Messages',
    },
  ]
  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        <Row>
          <Col md={6}>
            <h3 className="card_title">Message</h3>
          </Col>
          <Col md={6}>
            <button
              className="primary_button"
              onClick={() => goto('/send-message')}
              style={{ float: 'right' }}
            >
              Create message
            </button>
          </Col>
        </Row>
        <Row className="mt-5">
          {messageCard.map((item) => (
            <p className="">{item.title}</p>
          ))}
        </Row>
      </Card>
    </div>
  )
}
