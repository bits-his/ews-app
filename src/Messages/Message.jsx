import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardText, Col, Row, Table } from 'reactstrap'
import { HiOutlinePencil } from 'react-icons/hi'
import { MdSend, MdCancelScheduleSend } from 'react-icons/md'
import { primaryColor } from '../Colors'
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
  const [showTable, setShowTable] = useState(false)

  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        <Row>
          <Col md={6}>
            <h3 className="card_title mb-4">Message</h3>
          </Col>
          <Col md={6}>
            {/* <button
              className="primary_button"
              onClick={() => goto('/send-message')}
              style={{ float: 'right' }}
            >
              Create message
            </button> */}
          </Col>
        </Row>
        <div className="buttons_div">
          <button
            className="message_button"
            onClick={() => goto('/send-message')}
          >
            <HiOutlinePencil size="1.2rem" /> Compose message
          </button>

          <button
            className="message_button"
            onClick={() => setShowTable(false)}
            style={{ backgroundColor: !showTable ? primaryColor : null }}
          >
            <MdSend size="1.2rem" /> Sent
          </button>

          <button
            className="message_button"
            onClick={() => setShowTable(true)}
            style={{ backgroundColor: showTable ? primaryColor : null }}
          >
            <MdCancelScheduleSend size="1.2rem" /> Failed
          </button>
        </div>
        <Row className="mt-5">
          {!showTable ? (
            <Table responsive size="sm">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Table sent</th>
                  <th>Table sent</th>
                  <th>Table sent</th>
                  <th>Table sent</th>
                  <th>Table sent</th>
                  <th>Table sent</th>
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
          ) : (
            <Table responsive size="sm">
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
          )}
        </Row>
      </Card>
    </div>
  )
}
