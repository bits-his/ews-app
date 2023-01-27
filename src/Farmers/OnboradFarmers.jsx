import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { BsPlus } from 'react-icons/bs'
import TableFarmer from '../Farmers/FarmerTable'
import { Typeahead } from 'react-bootstrap-typeahead'

export default function OnboardFarmers() {
  const _form = {
    // csv: '',
    // excel: '',
    fname: '',
    lname: '',
    lga: '',
    state: '',
    phone: '',
    address: '',
    products: '',
    f_address: '',
  }
  const [form, setForm] = useState(_form)
  const [data, setData] = useState([])

  const [multiSelections, setMultiSelections] = useState([])

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }))

  const handleAdd = () => {
    setData((p) => [...p, form])
    setForm(_form)
  }

  const handleDelete = (idx) => {
    let arr = data.filter((i, id) => id !== idx)
    setData(arr)
  }
  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        <h3 className="card_title">Onboard Farmer</h3>
        <Row>
          <Col md={6}>
            <input
              className="input_field p-2 mt-4"
              placeholder="First Name"
              type="text"
              name="fname"
              value={form.fname}
              onChange={handleChange}
            />

            <input
              className="input_field p-2 mt-4"
              placeholder="Last Name"
              type="text"
              name="lname"
              value={form.lname}
              onChange={handleChange}
            />

            <Row>
              <Col md={6}>
                <input
                  className="input_field p-2 mt-4"
                  placeholder="Local Government"
                  type="text"
                  name="lga"
                  value={form.lga}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <input
                  className="input_field p-2 mt-4"
                  placeholder="State"
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <input
              className="input_field p-2 mt-4"
              placeholder="Phone"
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              className="input_field p-2 mt-4"
              placeholder="Farmer Address"
              type="address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />

            {/*
             */}
            <Typeahead
              id="basic-typeahead-multiple"
              labelKey="name"
              multiple
              onChange={setMultiSelections}
              options={['Livestock', 'Cash crops']}
              placeholder="Farming types"
              selected={multiSelections}
              name="farming type"
              className="input_field p-2 mt-4"
            />

            <input
              className="input_field p-2 mt-4"
              placeholder="Farm Address"
              type="address"
              name="f_address"
              value={form.f_address}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {data.length ? (
              <TableFarmer data={data} handleDelete={handleDelete} />
            ) : (
              ''
            )}
          </Col>
        </Row>
        <div>
          <button className="primary_button mt-4" onClick={handleAdd}>
            Add <BsPlus size={25} />
          </button>
        </div>
      </Card>
    </div>
  )
}
