import React, { useState } from 'react'
import { GoDashboard } from 'react-icons/go'
import { BsChatLeftText } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { GiFarmer } from 'react-icons/gi'
import { MdCancelScheduleSend } from 'react-icons/md'
import { VscFeedback } from 'react-icons/vsc'
import { CiSettings } from 'react-icons/ci'
import { MdCreate } from 'react-icons/md'
import { BiSend } from 'react-icons/bi'
import {
  IoIosArrowUp,
  IoIosArrowDown,
  // IoSendSharp,
  // IoCreate,
  // IoCreateSharp,
} from 'react-icons/io'
import { Row } from 'reactstrap'
import logo from '../Images/Knowtify.png'
import './Sidebar.css'
import { AiOutlineLogout } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const drop = () => {
    setShowSubMenu((p) => !p)
  }
  const goto = useNavigate()

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="logo" />
      <div className="mt-3">
        {/* {sidebar.map((item) => ( */}
        <div onClick={() => goto('/dashboard')}>
          <p className="sidebar_item_p">
            <span>
              {' '}
              <GoDashboard size="2.2rem" className="sidebar_icon" />
            </span>
            <span style={{ marginLeft: 5 }}>Dashboard</span>
          </p>
        </div>
        <div
          onClick={() => {
            // goto('/messages')
            drop()
          }}
        >
          <p className="sidebar_item_p">
            <span>
              {' '}
              <BsChatLeftText size="2.2rem" className="sidebar_icon" />
            </span>
            <span style={{ marginLeft: 5 }}>
              {/* <IoCreateSharp /> */}
              Message
              {showSubMenu ? (
                <IoIosArrowUp size="1.5rem" style={{ marginLeft: 10 }} />
              ) : (
                <IoIosArrowDown size="1.5rem" style={{ marginLeft: 10 }} />
              )}
            </span>
          </p>
        </div>{' '}
          {showSubMenu ? (
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
          ) : null}
        <div>
          <p className="sidebar_item_p">
            <span>
              {' '}
              <HiOutlineUsers size="2.2rem" className="sidebar_icon" />
            </span>
            <span style={{ marginLeft: 5 }}>Admin</span>
          </p>
        </div>
        <div onClick={() => goto('/farmers')}>
          <p className="sidebar_item_p">
            <span>
              {' '}
              <GiFarmer size="2.6rem" className="sidebar_icon" />
            </span>
            <span style={{ marginLeft: 5 }}>Farmers</span>
          </p>
        </div>
        <div>
          <p className="sidebar_item_p">
            <span>
              {' '}
              <VscFeedback size="2.5rem" className="sidebar_icon" />
            </span>
            <span style={{ marginLeft: 5 }}>Feedbacks</span>
          </p>
        </div>
        <div>
          <p className="sidebar_item_p">
            <span>
              {' '}
              <CiSettings size="2.5rem" className="sidebar_icon" />
            </span>
            <span style={{ marginLeft: 5 }}>Settings</span>
          </p>
        </div>
        {/* ))} */}
      </div>
      <div className="logout_div">
        <p className="sidebar_item_l">
          <span>
            <AiOutlineLogout size="2.5rem" className="sidebar_icon_2" />
          </span>
          <span style={{ marginLeft: 5 }}>Log out</span>
        </p>
      </div>
    </div>
  )
}
