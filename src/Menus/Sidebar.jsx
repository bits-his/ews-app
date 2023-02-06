import React, { useState } from 'react'
import { GoDashboard } from 'react-icons/go'
import { BsChatLeftText } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { GiFarmer } from 'react-icons/gi'
import { VscFeedback } from 'react-icons/vsc'
import { CiSettings } from 'react-icons/ci'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import logo from '../Images/Knowtify.png'
import './Sidebar.css'
import { AiOutlineLogout } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import profile from '../Images/profile.jpg'
import { FaBars } from 'react-icons/fa'

export default function Sidebar() {
  const dispatch = useDispatch()
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
  // const drop = () => {
  //   setShowSubMenu((p) => !p)
  // }
  const goto = useNavigate()
  const { user } = useSelector((state) => state.auth)

  return (
<<<<<<< HEAD
    <div className="sidebar" style={{width: isOpen ? '250px' : '80px'}}>
      <div>
        <div style={{display:'flex', justifyContent: 'space-around'}}> 
          <img src={logo} alt="logo" className="logo" style={{display: isOpen ? 'block' : 'none'}}/>
          <FaBars style={{marginTop: 20, fontSize: 25, cursor: 'pointer', marginLeft: isOpen ? '10px': ''}} onClick= {toggle} />
=======
    <div className="sidebar" style={{ width: isOpen ? '' : '80px' }}>
      {/* {JSON.stringify(user)} */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img
            src={logo}
            alt="logo"
            className="logo"
            style={{ display: isOpen ? 'block' : 'none' }}
          />
          <FaBars
            style={{
              marginTop: 20,
              fontSize: 25,
              cursor: 'pointer',
              marginLeft: isOpen ? '10px' : '',
            }}
            onClick={toggle}
          />
>>>>>>> 6e3e20425efda26d953f6059f17192f72a2e9fd0
        </div>
        
        <div onClick={()=>goto('/profile')} className='profile_div' style={{ paddingTop: isOpen ? '': '30px'}}>
          <img src={profile} alt="profile" className="profile mt-3" style={{width: isOpen ? '' : '50px'}}/>
          <div>
<<<<<<< HEAD
            <p className="ass_name" style={{display: isOpen ? 'block' : 'none'}}>Association Name</p>
=======
            <p
              className="ass_name"
              style={{ display: isOpen ? 'block' : 'none' }}
            >
              {user.name}
            </p>
>>>>>>> 6e3e20425efda26d953f6059f17192f72a2e9fd0
          </div>
        </div>
        <div className="mt-3" style={{paddingTop: isOpen ? '' : '55px' }}>
          {/* {sidebar.map((item) => ( */}
          <div onClick={() => goto('/dashboard')}>
            <p className="sidebar_item_p">
              <span>
                {' '}
                <GoDashboard size="2.2rem" className="sidebar_icon" />
              </span>
              <span style={{ marginLeft: 5, display: isOpen ? 'inline' : 'none', }}>Dashboard</span>
            </p>
          </div>
          <div onClick={() => goto('/messages')}>
            <p className="sidebar_item_p">
              <span>
                {' '}
                <BsChatLeftText size="2.2rem" className="sidebar_icon" />
              </span>
              <span style={{ marginLeft: 5, display: isOpen ? 'inline' : 'none' }}>
                {/* <IoCreateSharp /> */}
                Message
                {/* {showSubMenu ? (
                <IoIosArrowUp size="1.5rem" style={{ marginLeft: 10 }} />
              ) : (
                <IoIosArrowDown size="1.5rem" style={{ marginLeft: 10 }} />
              )} */}
              </span>
            </p>
          </div>{' '}
          {/* {showSubMenu ? (
          <div className="submenu">
            <p className="submenu_item" onClick={() => goto('/send-message')}>
              <MdCreate size="1.2rem" /> Create message
            </p>
            <p className="submenu_item">
              <BiSend size="1.2rem" /> Sent message
            </p>
            <p className="submenu_item">
              <MdCancelScheduleSend size="1.2rem" /> Failed message
            </p>
          </div>
        ) : null} */}
          <div>
            <p className="sidebar_item_p">
              <span>
                {' '}
                <HiOutlineUsers size="2.2rem" className="sidebar_icon" />
              </span>
              <span style={{ marginLeft: 5, display: isOpen ? 'inline' : 'none' }}>Admin</span>
            </p>
          </div>
          <div onClick={() => goto('/farmers')}>
            <p className="sidebar_item_p">
              <span>
                {' '}
                <GiFarmer size="2.6rem" className="sidebar_icon" />
              </span>
              <span style={{ marginLeft: 5, display: isOpen ? 'inline' : 'none' }}>Farmers</span>
            </p>
          </div>
          <div>
            <p className="sidebar_item_p">
              <span>
                {' '}
                <VscFeedback size="2.5rem" className="sidebar_icon" />
              </span>
              <span style={{ marginLeft: 5, display: isOpen ? 'inline' : 'none' }}>Feedbacks</span>
            </p>
          </div>
          <div>
            <p className="sidebar_item_p">
              <span>
                {' '}
                <CiSettings size="2.5rem" className="sidebar_icon" />
              </span>
              <span style={{ marginLeft: 5, display: isOpen ? 'inline' : 'none' }}>Settings</span>
            </p>
          </div>
          {/* ))} */}
        </div>
        <div className="logout_div">
          <p className="sidebar_item_l" onClick={() => dispatch(logout(goto))}>
            <span>
              <AiOutlineLogout size="2.5rem" className="sidebar_icon_2" />
            </span>
            <span style={{ marginLeft: 5, display: isOpen ? 'inline' : 'none' }}>Log out</span>
          </p>
        </div>
      </div>

      <div></div>
    </div>
  )
}
