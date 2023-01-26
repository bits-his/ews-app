import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row, Table } from 'reactstrap'

export default function Farmers() {
  const goto = useNavigate()
  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        <Row>
          <Col md={6}>
            <h3 className="card_title">Farmers</h3>
          </Col>
          <Col md={6}>
            <button
              className="primary_button"
              onClick={() => goto('/onboard-farmers')}
              style={{ float: 'right' }}
            >
              Onboard Farmers
            </button>
          </Col>
        </Row>
        <Table responsive size="sm mt-5">
          <thead>
            <tr>
              <th>SN</th>
              <th>Table failed</th>
              <th>Table failed</th>
              <th>Table failed</th>
              <th>Table failed</th>
              <th>Table failed</th>
              <th>Table failed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  )
}
