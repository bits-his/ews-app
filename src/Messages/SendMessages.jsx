import React, { useState } from 'react'
import { Card, Col, Form, Input, Row } from 'reactstrap'

export default function SendMessage() {
  const [form, setForm] = useState({
    title: '',
    org_name: '',
    member_type: '',
    target_farmer: '',
    target: '',
    messages: '',
  })

  const handleAdd = (e) => {
    e.preventDefault()
    if (form.title === '' || form.org_name === '' || form.messages === '') {
      alert('Input Value')
    }
    if (form.title && form.messages) {
      setForm({
        title: '',
        org_name: '',
        member_type: '',
        target_farmer: '',
        target: '',
        messages: '',
      })
    }
  }

  function handle(e) {
    const newData = { ...form }
    newData[e.target.id] = e.target.value
    setForm(newData)
    console.log(newData)
  }

  return (
    <Card body className="form_input dashboard_card p-4 shadow-sm m-3">
      <h3 className="card_title">Send Message</h3>
      <Form onSubmit={handleAdd}>
        {/* {JSON.stringify(form)} */}
        <Row>
          <Col md={6}>
            <input
              className="input_field p-2 mt-3"
              type="text"
              id="title"
              placeholder="Message Title"
              value={form.title}
              onChange={(e) => handle(e)}
            />
            {/* <select
              className="input_field p-2 mt-3"
              type="select"
              id="member_type"
              value={form.member_type}
              onChange={(e) => handle(e)}
            >
              <option>Member Type</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select> */}
            <select
              className="input_field p-2 mt-3"
              type="select"
              id="member_type"
              value={form.member_type}
              onChange={(e) => handle(e)}
            >
              <option>Locations</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
            <textarea
              className="input_field mt-3 p-2"
              type="textarea"
              id="messages"
              rows="10"
              placeholder="Write message"
              value={form.messages}
              onChange={(e) => handle(e)}
            />
          </Col>
          <Col md={6}>
            <input
              className="input_field p-2 mt-3"
              type="text"
              id="org_name"
              placeholder="Organization Name"
              value={form.org_name}
              onChange={(e) => handle(e)}
            />
            <select
              className="input_field p-2 mt-3"
              type="select"
              id="target_farmer"
              value={form.target_farmer}
              onChange={(e) => handle(e)}
            >
              <option>Target by products</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
            <select
              className="input_field p-2 mt-3"
              type="select"
              id="target"
              value={form.target}
              onChange={(e) => handle(e)}
            >
              <option>Target by location</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
          </Col>
        </Row>
        <button className="primary_button mt-3">Send</button>
      </Form>
    </Card>
  )
}
