import React from 'react'
import './Navbar.css'
import profile from '../Images/profile.jpg'
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_div">
        <div>
          <p className="ass_name">Association Name</p>
          <img src={profile} alt="profile" className="profile" />
        </div>
      </div>
    </div>
  )
}
