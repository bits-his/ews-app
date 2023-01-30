import React, { useEffect, useState } from 'react'
import { Card, Col, Form, Input, Row } from 'reactstrap'
import { CgClose } from 'react-icons/cg'
import { RxText } from 'react-icons/rx'
import { MdCancelScheduleSend, MdKeyboardVoice } from 'react-icons/md'
import { Typeahead } from 'react-bootstrap-typeahead'

export default function SendMessage() {
  const [multiSelections, setMultiSelections] = useState([])

  const [form, setForm] = useState({
    title: '',
    // org_name: '',
    member_type: '',
    // target_farmer: '',
    // target: '',
    messages: '',
  })
  const [filter, setFilter] = useState([])
  let joinMemberType = filter.map((i) => i.member_type).join(',')

  const handleAdd = (e) => {
    e.preventDefault()
    console.log({
      title: form.title,
      member_type: joinMemberType,
      messages: form.messages,
    })
    if (form.title === '' || form.messages === '') {
      alert('Input Value')
    }
    if (form.title && form.messages) {
      setForm({
        title: '',
        // org_name: '',
        member_type: '',
        // target_farmer: '',
        // target: '',
        messages: '',
      })
    }
    setFilter([])
  }

  function handle(e) {
    const newData = { ...form }
    newData[e.target.id] = e.target.value
    setForm(newData)
    // console.log(newData)
  }

  const handleDelete = (index) => {
    let arr = filter.filter((a, b) => b !== index)
    setFilter(arr)
  }

  useEffect(() => {
    if (form.member_type !== '') {
      setFilter((p) => [...p, { member_type: form.member_type }])
    }
  }, [form.member_type])
  return (
    <Card body className="form_input dashboard_card p-4 shadow-sm m-3">
      <h3 className="card_title mb-4">Send Message</h3>
      <div className="buttons_div">
        <button
          className="message_button"
          onClick={() => goto('/send-message')}
        >
          <MdKeyboardVoice size="1.2rem" /> Voice message
        </button>

        <button
          className="message_button"
          // onClick={() => setShowTable(false)}
          // style={{ backgroundColor: !showTable ? primaryColor : null }}
        >
          <RxText size="1.2rem" /> Text Message
        </button>
      </div>
      <Form onSubmit={handleAdd}>
        {/* {JSON.stringify(kkk)} */}
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
            {/* <select
              className="input_field p-2 mt-3"
              type="select"
              id="member_type"
              value={form.member_type}
              onChange={(e) => {
                handle(e)
                // getFilter()
              }}
            >
              <option>Farming Category</option>
              <option value="1">1</option>
              <option value="Ahmad">ahmad</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select> */}
            <Typeahead
              id="basic-typeahead-multiple"
              labelKey="name"
              multiple
              onChange={setMultiSelections}
              options={['Livestock', 'Cash crops']}
              placeholder="Farming Category"
              selected={multiSelections}
              name="farming type"
              className="input_field p-2 mt-4"
            />
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
          {/* <Col md={6}>
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
              type="select2
              id="target"
              value={form.target}
              onChange={(e) => handle(e)}
            >
              <option>Target by location</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
          </Col> */}
          <Col md={6} className="mt-3">
            {filter.map((i, id) => (
              <span
                style={{
                  letterSpacing: 1,
                  backgroundColor: '#244f80',
                  color: '#fff',
                  padding: 8,
                  fontSize: 12,
                  marginRight: 10,
                  lineHeight: 3,
                  borderRadius: 5,
                  opacity: '0.6',
                }}
              >
                {' '}
                {i.member_type}
                <CgClose
                  onClick={() => handleDelete(id)}
                  style={{
                    marginLeft: 7,
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: 23,
                    fontWeight: 'bolder',
                    // paddingBottom: '3'
                  }}
                  title="cancel"
                  size="1rem"
                />
              </span>
            ))}
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <button className="primary_button mt-3" style={{ float: 'right' }}>
              Send
            </button>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Form>
    </Card>
  )
}
