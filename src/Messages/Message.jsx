import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card,  Col, Row, Table } from 'reactstrap'
import { HiOutlinePencil } from 'react-icons/hi'
import { MdSend, MdCancelScheduleSend } from 'react-icons/md'
import { primaryColor } from '../Colors'
import { _get } from '../utils/Helper'
import { useSelector } from 'react-redux'
import moment from 'moment'
export default function Message() {
  const { user } = useSelector((state) => state.auth)
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    setLoading(true)
    _get(
      `messages?query_type=VIEW-ALL&org_id=${user.org_id}`,
      // {org_id:user.org_id},
      (response) => {
        setLoading(false)
        if (response.success) setMessages(response.results)
        console.log({ response })
      },
      (error) => {
        setLoading(false)
        console.error(error)
      },
    )
  }, [user.org_id])

  return (
    <div>
      {/* {JSON.stringify(user)} */}
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
            style={{
              backgroundColor: !showTable ? primaryColor : null,
              paddingRight: 15,
              paddingLeft: 15,
            }}
          >
            <MdSend size="1.2rem" /> Sent
          </button>

          <button
            className="message_button"
            onClick={() => setShowTable(true)}
            style={{
              backgroundColor: showTable ? primaryColor : null,
              paddingRight: 15,
              paddingLeft: 15,
            }}
          >
            <MdCancelScheduleSend size="1.2rem" /> Failed
          </button>
        </div>
        <Row className="mt-5">
          {!showTable ? (
            <Table striped responsive size="sm">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Targeted</th>
                  <th>Date/Time</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              {loading ? (
                <sapn>Loading messages...</sapn>
              ) : (
                <tbody>
                  {messages.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                      <td>Table cell</td>
                      <td>{moment(item.created_at).calendar()}</td>
                      {/* <td>Table cell</td> */}
                    </tr>
                  ))}
                </tbody>
              )}
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
