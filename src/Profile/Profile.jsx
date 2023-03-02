import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Col, Row, Label } from 'reactstrap'
import org_logo from '../Images/profile.jpg'

import { TbEdit } from 'react-icons/tb'
import { imgUrl, server_url } from '../utils/Helper'
export default function Profile() {
  const { user } = useSelector((p) => p.auth)
  const [profile, setProfile] = useState(user)

  const handleChange = ({ target: { name, value } }) => {
    setProfile((p) => ({ ...p, [name]: value }))
  }

  useEffect(() => {
    setProfile(user)
  })

  const updateApi = () => {}
  const [play, setPlay] = useState(null)
  const [image, setImage] = useState([])
  function handleImage(e) {
    const file = e.target.files[0]
    let reader = new FileReader()
    reader.onloadend = () => {
      setImage(e.target.files[0])
      setPlay(reader.result)
      console.log(e.target.files[0])
    }

    reader.readAsDataURL(file)
    //
  }
  const [form, setForm] = useState({
    name: 'musa',
    lname: 'kabiru',
  })
  let id = user && user.id
  const handleUpdatPic = () => {
    const data = new FormData()
    data.append('image', image)
    data.append('query_type', 'insert')
    data.append('id', id)
    Object.keys(form).forEach((i) => data.append(i, form[i]))
    // alert(JSON.stringify(data))
    fetch(`${server_url}/users/profile`, {
      method: 'POST',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          // alert('success')
          window.location.reload();
        }
        alert(data.msg)
      })
      .catch((err) => {
        console.log('Bad request')
        console.log(err)
        alert('An Error Occured')
      })
  }

  return (
    <div>
      {/* {JSON.stringify( user )} */}
      {/* {JSON.stringify(profile)} */}
      <Row className="m-0">
        <Col md={1}></Col>
        <Col md={4} className="mt-4">
          <Card className="profile_card shadow-sm p-4">
            <div class="card-body text-center m-0 p-0">
              <div className="card-body text-center ">
                <p className="profile_name m-0">{user.name}</p>
                <p style={{ display: 'inline-block' }} className="profile_mail">
                  {user.email}
                </p>
              </div>
              {play ? (
                <img
                  src={play && play}
                  alt="`"
                  className="org_logo "
                  width={200}
                  // style={{
                  //   width: "190px",
                  //   height: "150px",
                  // }}
                />
              ) : (
                <img
                  src={
                    user && user.logo === null
                      ? org_logo
                      : `${imgUrl}/${user.logo}`
                  }
                  className="org_logo "
                  width={200}
                />
              )}

              <label for="newProfilePhoto">
                {' '}
                <TbEdit className="edit_button" size={48} />
              </label>
              <input
                className="uploadProfileInput"
                type="file"
                name="profile_pic"
                id="newProfilePhoto"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImage}
              />
              <div className="card-body text-center">
                <button className="primary_button mt-2" onClick={handleUpdatPic}>
                  Upload new photo
                </button>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={5} className="mt-4 ">
          <Card className="profile_card p-4 h-100 shadow-sm">
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
                      className="primary_button mt-4"
                      onClick={updateApi}
                    >
                      Upload Info
                    </button>
                  </Col>
                  <Col md={4}> </Col>
                  <Col md={4}>
                    <button className="primary_button mt-4 w-100">
                      Cancel{' '}
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
  )
}
{
}
