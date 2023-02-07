import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row, Label } from "reactstrap";
import org_logo from "../Images/profile.jpg";

import { TbEdit } from "react-icons/tb";
export default function Profile() {
  const { user } = useSelector((p) => p.auth);
  const [profile, setProfile] = useState(user);

  const handleChange = ({ target: { name, value } }) => {
    setProfile((p) => ({ ...p, [name]: value }));
  };
  const handleAdd = () => {
    console.log(profile);
  };

  useEffect(() => {
    setProfile(user);
  });

  const updateApi = () => {
    
  }

  return (
    <div>
      {/* {JSON.stringify({ user })} */}
      {/* {JSON.stringify(profile)} */}
      <Row>
        <Col md={1}></Col>
        <Col md={4} className="col-lg-3 m-4">
          <Card className="mb-4 h-75 shadow-sm">
            <div class="card-body text-center m-0 p-0">
              <div className="card-body text-center ">
                <p className="profile_name m-0">{user.name}</p>
                <p style={{ display: "inline-block" }} className="profile_mail">
                  {user.email}
                </p>
              </div>
              <img src={org_logo} className="org_logo " width={200} />
              <TbEdit className="edit_button" size={48} />
              <div className="card-body text-center">
                <button className="upload_button">Upload new photo</button>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={5} className=" mt-4 ">
          <Card className=" p-4 h-100 shadow-sm">
            <h2>User Profile</h2>
            <div>
              <Label className="mt-3 mb-d">Name</Label>
              <input
                className="input_field p-2"
                placeholder="Name"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
              <Label className="mt-3 mb-0">Type of organisation</Label>
              <input
                className="input_field p-2"
                placeholder="Organisation type"
                type="text"
                name="org_types"
                value={profile.org_types}
                onChange={handleChange}
              />

              <Label className="mt-3 mb-0">Email</Label>
              <input
                className="input_field p-2"
                placeholder="mail"
                type="email"
                name="mail"
                value={profile.mail}
                onChange={handleChange}
                
              />
              <Row>
                <Col md={6}>
                  <Label className="mt-3 mb-0">Phone 1</Label>
                  <input
                    className="input_field p-2"
                    placeholder="Phone 1"
                    type="number"
                    name="phone_1"
                    value={profile.phone_1}
                    onChange={handleChange}
                  />
                </Col>
                <Col md={6}>
                  <Label className="mt-3 mb-0">Phone 1</Label>
                  <input
                    className="input_field p-2"
                    placeholder="phone 2"
                    type="number"
                    name="phone_2"
                    value={profile.phone_2}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Label className="mt-3 mb-0">Website</Label>
              <input
                className="input_field p-2"
                placeholder="website"
                type="text"
                name="web"
                value={profile.web}
                onChange={handleChange}
              />
              <Label className="mt-3 mb-0">Password</Label>
              <input
                className="input_field p-2"
                placeholder="Password"
                type="password"
                name="p_word"
                value={profile.p_word}
                onChange={handleChange}
              />
              <div className="profile_button">
                <Row>
                  <Col md={4}>
                    <button
                      className="upload_button mt-3 w-100"
                      onClick={handleAdd}
                    >
                      Upload Info
                    </button>
                  </Col>
                  <Col md={4}> </Col>
                  <Col md={4}>
                    <button className="primary_button mt-4 w-100">
                      Cancel{" "}
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
{
}
