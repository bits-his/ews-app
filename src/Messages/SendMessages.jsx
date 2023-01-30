import React, { useEffect, useState } from 'react'
import { Card, Col, Form, Input, Row } from 'reactstrap'
import { CgClose } from 'react-icons/cg'
import { RxText } from 'react-icons/rx'
import { MdCancelScheduleSend, MdKeyboardVoice } from 'react-icons/md'
import { Typeahead } from 'react-bootstrap-typeahead'
import { primaryColor } from '../Colors'

export default function SendMessage() {
  const [multiSelections, setMultiSelections] = useState([])
  const [messageType, setMessageType] = useState(false)

  const [form, setForm] = useState({
    title: '',
    member_type: '',
    messages: '',
    farming_category: multiSelections,
  })
  const [filter, setFilter] = useState([])
  let joinMemberType = filter.map((i) => i.member_type).join(',')

  const handleAdd = (e) => {
    form.farming_category = multiSelections.toString()
    e.preventDefault()
    console.log({
      title: form.title,
      farming_category: form.farming_category,
      member_type: joinMemberType,
      messages: form.messages,
    })
    if (form.title && form.messages) {
      setForm({
        title: '',
        farming_category: '',
        member_type: '',
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
          onClick={() => setMessageType(false)}
          style={{ backgroundColor: !messageType ? primaryColor : null }}
        >
          <RxText size="1.2rem" /> Text Message
        </button>
        <button
          className="message_button"
          style={{ backgroundColor: messageType ? primaryColor : null }}
          onClick={() => setMessageType(true)}
        >
          <MdKeyboardVoice size="1.2rem" /> Voice message
        </button>
      </div>
      <Form onSubmit={handleAdd}>
        {/* {JSON.stringify(kkk)} */}
        <Row>
          <Col md={6}>
            {!messageType ? (
              <div>
                <input
                  className="input_field p-2 mt-3"
                  type="text"
                  id="title"
                  placeholder="Message Title"
                  value={form.title}
                  onChange={(e) => handle(e)}
                />

                {/* {JSON.stringify(multiSelections)} */}
                <Typeahead
                  id="basic-typeahead-multiple"
                  labelKey="name"
                  multiple
                  onChange={setMultiSelections}
                  options={['Livestock', 'Cash crops']}
                  placeholder="Target regions, locations, products, etc..."
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
                <button
                  className="primary_button mt-3"
                  style={{ float: 'right' }}
                >
                  Send
                </button>
              </div>
            ) : (
              <div className="voice_message mt-3">
                <MdKeyboardVoice className="mic" size="3rem" />
                <button className="primary_button ms-3">Send</button>
              </div>
            )}
          </Col>
          {/* <Col md={6} className="mt-3">
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
          </Col> */}
        </Row>
        {/* <Row>
          <Col md={6}>
            <button className="primary_button mt-3" style={{ float: 'right' }}>
              Send
            </button>
          </Col>
          <Col md={6}></Col>
        </Row> */}
      </Form>
    </Card>
  )
}
