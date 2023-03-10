import React, { useCallback, useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
// import { CgClose } from 'react-icons/cg'
import { RxText } from 'react-icons/rx'
import {  MdKeyboardVoice } from 'react-icons/md'
// import { Typeahead } from 'react-bootstrap-typeahead'
import { primaryColor } from '../Colors'
import Locations from './Locations'
import Sizes from './Sizes'
import Crops from './Crops'
import { _get, _post } from '../utils/Helper'
import Languages from './Languages'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function SendMessage() {
  const [filters, setFilters] = useState({})
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(false)
  const [crops, setCrops] = useState([])
  const [selectLocation, setSelectLocation] = useState([])
  const [selectSize, setSelectSize] = useState([])
  const [selectLanguage, setSelectLanguage] = useState([])
  const [selectCrop, setSelectCrop] = useState([])
  const [matchedFarmers, setMatchedFarmers] = useState(0)
  const [messageType, setMessageType] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const goto = useNavigate()
  const _form = {
    user_id: user.id,
    org_id: user.org_id,
    target: '',
    title: '',
    body: '',
  }

  const [form, setForm] = useState(_form)

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }))

  const setAll = () => {
    setFilters((p) => ({
      ...p,
      title: form.title,
      message: form.body,
      filter: {
        size: selectSize,
        crop: selectCrop,
        location: selectLocation.map((item) => item.name),
        language: selectLanguage,
      },
    }))
  }
  // setForm((p) => ({ ...p, [name]: value }))
  const getLocations = useCallback(() => {
    _get(
      form.target === 'Locations'
        ? `locations?query_type=view-all&data=lgas`
        : `farmers/crops?query_type=view-all&data=crops`,
      (response) => {
        // setLoading(false)
        if (form.target === 'Locations') {
          setLocations(response.results)
        } else if (form.target === 'Crops') {
          setCrops(response.results)
        }
        // alert(JSON.stringify(response));
        console.log({ response })
      },
      (error) => {
        // setLoading(false)
        console.error(error)
      },
    )
  }, [form.target])

  useEffect(() => {
    getLocations()
  }, [getLocations])

  const getFarmers = useCallback(() => {
    _get(
      `farmers?query_type=count-by-filters&lga=${selectLocation
        .map((l) => l.name)
        .toString()}&crops=${selectCrop.map(
        (c) => c.name,
      )}&sizes=${selectSize.map((s) => s)}`,
      (response) => {
        // setLoading(false)
        if (response.results && response.results.length) {
          setMatchedFarmers(response.results[0].total)
        }

        // alert(JSON.stringify(response));
        console.log({ response })
      },
      (error) => {
        // setLoading(false)
        console.error(error)
      },
    )
  }, [selectLocation, selectCrop])

  useEffect(() => {
    getFarmers()
  }, [getFarmers])

  const handleSubmit = () => {
    // alert('hhghgh')
    setLoading(true)
    setAll()
    console.log(filters)
    _post(
      `messages?query_type=send-msg&lga=${selectLocation
        .map((l) => l.name)
        .toString()}&crops=${selectCrop.map(
        (c) => c.name,
      )}&sizes=${selectSize.map((s) => s)}`,
      form,
      (response) => {
        setLoading(false)
        console.log({ response, msg: 'SUBMITTED' })
        console.log(form)
        goto('/messages')
      },
      (error) => {
        setLoading(false)
        console.error(error)
      },
    )
  }
  const locationName = selectLocation.map((item) => item.name)

  return (
    <Card body className="form_input dashboard_card p-4 shadow-sm m-3">
      {/* {JSON.stringify({ filters })} */}
      {/* {JSON.stringify({ locationName })}
      {JSON.stringify({ selectCrop })}
      {JSON.stringify({ selectSize })}
      {JSON.stringify({ selectLanguage })} */}
      {JSON.stringify(setCrops)}
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
      <Row>
        <Col md={6}>
          {!messageType ? (
            <div>
              <select
                className="input_field p-2 mt-4"
                name="target"
                value={form.target}
                onChange={handleChange}
              >
                <option>Target locations, crops, sizes, and language...</option>
                <option>Sizes</option>
                <option>Locations</option>
                <option>Crops</option>
                <option>Language</option>
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
                onClick={handleSubmit}
              >
                {loading ? <span disabled>Sending...</span> : <span>Send</span>}
              </button>
            </div>
          ) : (
            <div className="voice_message mt-4">
              <MdKeyboardVoice className="mic" size="3rem" />
              <div>
                <button className="primary_button mt-5" onClick={''}>
                  Send
                </button>
              </div>
            </div>
          )}
        </Col>
        <Col md={6}>
          <div className="filtered_div p-2 mt-4">
            {/* {JSON.stringify(selectSize)}
            {JSON.stringify(selectCrop)}
            {JSON.stringify(selectLocation)} */}
            {form.target === 'Sizes' ? (
              <Sizes
                multiSelections={selectSize}
                onChange={setSelectSize}
                onClick={() => handleAdd('Sizes')}
              />
            ) : form.target === 'Crops' ? (
              <Crops
                multiSelections={selectCrop}
                onChange={setSelectCrop}
                onClick={() => handleAdd('Crops')}
                options={crops}
              />
            ) : form.target === 'Locations' ? (
              <Locations
                multiSelections={selectLocation}
                onChange={setSelectLocation}
                onClick={() => handleAdd('Locations')}
                options={locations}
                // onInputChange={getFarmers}
              />
            ) : form.target === 'Language' ? (
              <Languages
                multiSelections={selectLanguage}
                onChange={setSelectLanguage}
                onClick={() => handleAdd('Languages')}
                options={''}
              />
            ) : null}
            <p
              style={{ fontWeight: 'bold', color: primaryColor }}
              className="mt-3"
            >
              Active Filters
            </p>
            {selectLocation.length > 0 ? (
              <p>
                Locations:{' '}
                {selectLocation.map((l) => (
                  <span className="filter_items">{l.name}</span>
                ))}
              </p>
            ) : null}
            {selectCrop.length > 0 ? (
              <p>
                Crops:{' '}
                {selectCrop.map((c) => (
                  <span className="filter_items">{c.name}</span>
                ))}
              </p>
            ) : null}
            {selectSize.length > 0 ? (
              <p>
                Scales:{' '}
                {selectSize.map((s) => (
                  <span className="filter_items">{s}</span>
                ))}
              </p>
            ) : null}
            {selectLanguage.length > 0 ? (
              <p>
                Language:{' '}
                {selectLanguage.map((s) => (
                  <span className="filter_items">{s}</span>
                ))}
              </p>
            ) : null}
            {matchedFarmers > 0 ? (
              <p>{matchedFarmers} Farmers selected</p>
            ) : null}
          </div>
        </Col>
      </Row>
    </Card>
  )
}
