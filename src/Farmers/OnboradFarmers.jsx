import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import { BsPlus } from "react-icons/bs";
import TableFarmer from "../Farmers/FarmerTable";
import { Typeahead } from "react-bootstrap-typeahead";
import { _post } from "../utils/Helper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function OnboardFarmers() {
  const goto = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const _form = {
    fname: "",
    lname: "",
    lga: "",
    state: "",
    phone: "",
    f_type: "",
    crops: "",
    scales: "",
    org_id: user.org_id,
  };
  const [form, setForm] = useState(_form);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [multiSelections, setMultiSelections] = useState([]);
  const [multiSelections1, setMultiSelections1] = useState([]);
  const [multiSelections2, setMultiSelections2] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  // const checkForm = (name) => {

  // }

  const handleAdd = () => {
    if (form.fname === "") {
      setCheck(true);
    } else {
      setData((p) => [
        ...p,
        {
          ...form,
          f_type: multiSelections.join(","),
          crops: multiSelections1.join(","),
          scales: multiSelections2.join(","),
        },
      ]);
      setForm(_form);
    }
  };

  const handleDelete = (idx) => {
    let arr = data.filter((i, id) => id !== idx);
    setData(arr);
  };

  const handleSubmit = () => {
    setLoading(true);
    _post(
      "farmers?query_type=INSERT",
      data,
      (res) => {
        if (res.success) {
          goto("/farmers");
        }
        // alert('sucess')
        setLoading(false);
        console.log(res);
      },
      (err) => {
        setLoading(false);
        console.log(err);
        // alert(err)
      }
    );
    console.log(data);
  };

  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        <h3 className="card_title">Onboard Farmer</h3>
        {/* {JSON.stringify(data)} */}
        <Row>
          <Col md={6}>
            <div className="mt-3">
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
                  "Livestock",
                  "Cash crops",
                  "Irrigation",
                  "Seasonal",
                  "Livestock",
                  "Cash crops",
                  "Subsistence",
                ]}
                placeholder="Farming types"
                selected={multiSelections}
                name="farming type"
                className="input_field p-2"
              />
            </div>

            <div className="mt-3">
              <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections1}
                options={["Rice", "Maize"]}
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
                options={["Large Scale", "Medium Scale", "Small Scale"]}
                placeholder="Scale"
                selected={multiSelections2}
                name="farming type"
                className="input_field p-2"
              />
            </div>
          </Col>
          <Col md={6}>
            {data.length ? (
              <TableFarmer
                data={data}
                handleDelete={handleDelete}
                handleSubmit={handleSubmit}
                loading={loading}
              />
            ) : (
              ""
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
  );
}
