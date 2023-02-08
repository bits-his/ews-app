import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { BsPlus } from 'react-icons/bs'
import TableFarmer from '../Farmers/FarmerTable'
import { Typeahead } from 'react-bootstrap-typeahead'
import { _post, _update } from '../utils/Helper'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function EditModal({edit, toggle, getData}) {
  const goto = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const _form = {
    fname: '',
    lname: '',
    lga: '',
    state: '',
    phone: '',
    f_type: '',
    crops: '',
    scales: '',
    org_id: user.org_id,
  }

  let farmingTypeList = edit.f_type?.split(', ')
  let cropList = edit.crops?.split(', ')
  let scalecropList = edit.scale?.split(', ')
//   farmingTypeListfarmingTypeList{"farmer_id":12,"user_id":14,"org_id":6,"fname":"ABDUL","lname":"ASD","lga":"KURA","state":"KANO","address":"KURA","phone":"0900000000","email":null,"f_type":"LIVESTOCK","scale":"LARGE SCALE","crops":"RICE","f_address":"KURA","created_at":"2023-01-31T23:00:00.000Z","updated_at":"2023-02-06T13:11:39.000Z","dropDown":true}
  const [form, setForm] = useState(edit)
  const [loading, setLoading] = useState(false)
  const [multiSelections, setMultiSelections] = useState(farmingTypeList)
  const [multiSelections1, setMultiSelections1] = useState(cropList)
  const [multiSelections2, setMultiSelections2] = useState(scalecropList)
 
 
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  // const checkForm = (name) => {

  // }

//   const handleAdd = () => {
//     if (form.fname === "") {
//       setCheck(true);
//     } else {
//       setData((p) => [
//         ...p,
//         {
//           ...form,
//           f_type: multiSelections.join(","),
//           crops: multiSelections1.join(","),
//           scales: multiSelections2.join(","),
//         },
//       ]);
//       setForm(_form);
//     }
//   };
let const_form = {
  ...form,
          f_type: multiSelections?.join(","),
          crops: multiSelections1?.join(","),
          scale: multiSelections2?.join(","),
}

  const handleSubmit = () => {
    _update(
      "farmers/update-farmers",
      const_form,
      (res) => {
        if (res.success) {
          getData()
          toggle()
        }
        // alert('sucess')
        console.log(res);
      },
      (err) => {
        console.log(err);
        // alert(err)
      },
    )
    console.log(const_form)
  }

  return (
    <div>
      <div>
        {/* {JSON.stringify(edit)} */}
        <Row>
          <Col md={12}>
            <div className="mt-3">
              {/* <p className="text-danger m-0" style={{ fontSize: 12 }}>
                {formError.fname}
              </p> */}
              <input
                className="input_field p-2"
                placeholder="First Name"
                type="text"
                name="fname"
                value={form.fname}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              {/* <p className="text-danger m-0" style={{ fontSize: 12 }}>
                {formError.lname && formError.lname}
              </p> */}
              <input
                className="input_field p-2"
                placeholder="Last Name"
                type="text"
                name="lname"
                value={form.lname}
                onChange={handleChange}
              />
            </div>

            <Row>
              <Col md={6}>
                <div className="mt-3">
                  {/* <p className="text-danger m-0" style={{ fontSize: 12 }}>
                    {formError.lga && formError.lga}
                  </p> */}
                  <input
                    className="input_field p-2"
                    placeholder="Local Government"
                    type="text"
                    name="lga"
                    value={form.lga}
                    onChange={handleChange}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="mt-3">
                  {/* <p className="text-danger m-0" style={{ fontSize: 12 }}>
                    {formError.state && formError.state}
                  </p> */}
                  <input
                    className="input_field p-2"
                    placeholder="State"
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </Row>
            <div className="mt-3">
              {/* <p className="text-danger m-0" style={{ fontSize: 12 }}>
                {<formError className="phone"> </formError> && formError.phone}
              </p> */}
              <input
                className="input_field p-2"
                placeholder="Phone"
                type="number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections}
                options={[
                  'Livestock',
                  'Cash crops',
                  'Irrigation',
                  'Seasonal',
                  'Livestock',
                  'Cash crops',
                  'Subsistence',
                ]}
                placeholder="Farming types"
                selected={multiSelections}
                name="farming type"
                className="input_field p-2"
              />
            </div>
            {/* </Col>
              <Col md={4}> */}
            <div className="mt-3">
              <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections1}
                options={['Rice', 'Maize']}
                placeholder="Crops"
                selected={multiSelections1}
                name="farming type"
                className="input_field p-2"
              />
            </div>
            {/* </Col>
              <Col md={4}> */}
            <div className="mt-3">
              <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections2}
                options={['Large Scale', 'Medium Scale', 'Small Scale']}
                placeholder="Scale"
                selected={multiSelections2}
                name="farming type"
                className="input_field p-2"
              />
            </div>
            {/* </Col>
            </Row> */}

            {/* <input
              className="input_field p-2"
              placeholder="Farm Address"
              type="address"
              name="f_address"
              value={form.f_address}
              onChange={handleChange}
            /> */}
          </Col>
        </Row>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <button className="primary_button mt-4" onClick={toggle}>
                Cancel
            </button>
            <button className="primary_button mt-4" onClick={handleSubmit}>
                Update
            </button>
        </div>
      </div>
    </div>
  );
}
