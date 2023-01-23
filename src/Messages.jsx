import React, { useState } from 'react'
import { Card, Col, Form, Input, Row } from 'reactstrap'

export default function Messages() {
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
    <Card body className="form_input">
      <Form onSubmit={handleAdd}>
        {JSON.stringify(form)}
        <Row className="m-0 p-0">
          <Col>
            <Input
              className="title_input"
              type="text"
              id="title"
              placeholder="Tittle"
              value={form.title}
              onChange={(e) => handle(e)}
            />
            <Input
              className="title_input"
              type="text"
              id="org_name"
              placeholder="Org name"
              value={form.org_name}
              onChange={(e) => handle(e)}
            />
          </Col>
        </Row>
        <Row className="m-0 p-0">
          <Col>
            <Input
              className="option_input"
              type="select"
              id="member_type"
              value={form.member_type}
              onChange={(e) => handle(e)}
            >
              <option>Member type</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </Input>
            <Input
              className="option_input"
              type="select"
              id="target_farmer"
              value={form.target_farmer}
              onChange={(e) => handle(e)}
            >
              <option>Target farmer</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </Input>
            <Input
              className="option_input"
              type="select"
              id="target"
              value={form.target}
              onChange={(e) => handle(e)}
            >
              <option>Target</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </Input>
          </Col>
          <Col>
            <Input
              className="textarea_input"
              type="textarea"
              id="messages"
              placeholder="while........"
              value={form.messages}
              onChange={(e) => handle(e)}
            />
          </Col>
          <button>Send</button>
        </Row>
      </Form>
    </Card>
  )
}
