import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'

export default function OnboardFarmers() {
  const _form = {
    csv: '',
    excel: '',
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

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }))
  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        <h3 className="card_title">Onboard Farmer</h3>
        <Row>
          <Col md={6}>
            {/* <Label>CSV</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="CSV"
              type="text"
              name="csv"
              value={form.csv}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {/* <Label>Excel</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="Excel"
              type="text"
              name="excel"
              value={form.excel}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {/* <Label>Fist Name</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="First Name"
              type="text"
              name="fname"
              value={form.fname}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {/* <Label>Last Name</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="Last Name"
              type="text"
              name="lname"
              value={form.lname}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {/* <Label>LGA</Label> */}
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
            {/* <Label>State</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="State"
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {/* <Label>Phone No</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="Phone"
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {/* <Label>Address (Farma)</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="Farmer Address"
              type="address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {/* <Label>Address (Farma)</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="Farmer Products"
              type="text"
              name="products"
              value={form.products}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            {/* <Label>Farm (Address)</Label> */}
            <input
              className="input_field p-2 mt-4"
              placeholder="Farm Address"
              type="address"
              name="f_address"
              value={form.f_address}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div>
          <button className="primary_button mt-4" onClick={()=>{console.log(form)}}>Submit</button>
        </div>
      </Card>
    </div>
  )
}
