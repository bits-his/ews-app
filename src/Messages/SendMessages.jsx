import React, { useEffect, useState } from 'react'
import { Card, Col, Form, Input, Row } from 'reactstrap'
import { CgClose } from 'react-icons/cg'
import { RxText } from 'react-icons/rx'
import { MdCancelScheduleSend, MdKeyboardVoice } from 'react-icons/md'
import { Typeahead } from 'react-bootstrap-typeahead'
import { primaryColor } from '../Colors'
import Locations from './Locations'
import Sizes from './Sizes'
import Crops from './Crops'

export default function SendMessage() {
  const [selectLocation, setSelectLocation] = useState([])
  const [selectSize, setSelectSize] = useState([])
  const [selectCrop, setSelectCrop] = useState([])
  const [messageType, setMessageType] = useState(false)
  const _form = {
    target: '',
    title: '',
    body: '',
  }
  const [form, setForm] = useState(_form)
  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }))
  const submitMessage = () => {
    console.log(form)
  }
  return (
    <Card body className="form_input dashboard_card p-4 shadow-sm m-3">
      {/* <Typeahead
              id="basic-typeahead-multiple"
              labelKey="name"
              multiple
              onChange={setMultiSelections}
              options={[
                'Farming Category',
                'Location',
                'Size',
                'Products',
                'Crops',
              ]}
              placeholder="Target regions, locations, products, etc..."
              selected={multiSelections}
              name="farming type"
              className="input_field p-2 mt-4"
            /> */}
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
      {/* {JSON.stringify(kkk)} */}
      <Row>
        <Col md={6}>
          {!messageType ? (
            <div>
              {/* {JSON.stringify(multiSelections)} */}
              {/* <Typeahead
                  id="basic-typeahead-multiple"
                  labelKey="name"
                  multiple
                  onChange={setMultiSelections}
                  options={[
                    'Farming Category',
                    'Location',
                    'Size',
                    'Products',
                    'Crops',
                  ]}
                  placeholder="Target regions, locations, crops, etc..."
                  selected={multiSelections}
                  name="farming type"
                  className="input_field p-2 mt-4"
                /> */}
              <select
                className="input_field p-2 mt-4"
                name="target"
                value={form.target}
                onChange={handleChange}
              >
                <option>Target regions, location, crops...</option>
                <option>Farming Category</option>
                <option>Location</option>
                <option>Size</option>
                <option>Products</option>
                <option>Crops</option>
              </select>
              <input
                className="input_field p-2 mt-4"
                type="text"
                id="title"
                placeholder="Message Title"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
              <textarea
                className="input_field mt-3 p-2"
                type="textarea"
                id="messages"
                rows="10"
                placeholder="Write message"
                name="body"
                value={form.body}
                onChange={handleChange}
              />
              <button
                className="primary_button mt-3"
                style={{ float: 'right' }}
                onClick={submitMessage}
              >
                Send
              </button>
            </div>
          ) : (
            <div className="voice_message mt-4">
              <MdKeyboardVoice className="mic" size="3rem" />
              <div>
                <button className="primary_button mt-5">Send</button>
              </div>
            </div>
          )}
        </Col>
        <Col md={6}>
          <div className="filtered_div p-2 mt-4">
            <Locations
              multiSelections={selectLocation}
              onChange={setSelectLocation}
            />
            <Sizes multiSelections={selectSize} onChange={setSelectSize} />
            <Crops multiSelections={selectCrop} onChange={setSelectCrop} />
            <p style={{ fontWeight: 'bold', color: primaryColor }} className="">
              Active Filters
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  )
}
