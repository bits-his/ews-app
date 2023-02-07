import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row, Label } from "reactstrap";
import org_logo from "../Images/profile.jpg";

import { TbEdit } from "react-icons/tb";
import { _update } from "../utils/Helper";
export default function Profile() {
  const { user } = useSelector((p) => p.auth);
  const [profile, setProfile] = useState(user);

  const handleChange = ({ target: { name, value } }) => {
    setProfile((p) => ({ ...p, [name]: value }));
  };

  useEffect(() => {
    setProfile(user);
  });

  const updateApi = () => {
    _update(
      `users/${user.id}`,
      profile,
      (res) => {
        if (res.success) {
          alert("Update sucessfully");
        }
        // alert('sucess')
        console.log(res);
      },
      (err) => {
        setLoading(false);
        console.log(err);
        // alert(err)
      }
    );
  };

  return (
    <div>
      {/* {JSON.stringify({ user })} */}
      {/* {JSON.stringify(profile)} */}
      <Row>
        <Col md={1}></Col>
        <Col md={4} className="">
          <Card className="profile_card m-3 shadow-sm p-4">
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
                <button className="upload_button mt-2">Upload new photo</button>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={5} className=" mt-4 ">
          <Card className=" p-4 h-100 shadow-sm">
            <h2>User Profile</h2>
            <div>
              <Label className="profile_label mt-3 mb-d">Name</Label>
              <input
                className="input_field p-2"
                placeholder="Name"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
              <Label className="profile_label mt-3 mb-0">
                Type of organisation
              </Label>
              <input
                className="input_field p-2"
                placeholder="Organisation type"
                type="text"
                name="org_types"
                value={profile.org_types}
                onChange={handleChange}
              />

              <Label className="profile_label mt-3 mb-0">Email</Label>
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
                  <Label className="profile_label mt-3 mb-0">Phone 1</Label>
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
                  <Label className="profile_label mt-3 mb-0">Phone 1</Label>
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
              <Label className="profile_label mt-3 mb-0">Website</Label>
              <input
                className="input_field p-2"
                placeholder="website"
                type="url"
                name="web"
                value={profile.web}
                onChange={handleChange}
              />
              <Label className="profile_label mt-3 mb-0">Password</Label>
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
                      onClick={updateApi}
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
        <Col md={1}></Col>
      </Row>
    </div>
  );
}
{
}
