import React from 'react'
import { GoDashboard } from 'react-icons/go'
import { BsChatLeftText } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { GiFarmer } from 'react-icons/gi'
import { VscFeedback } from 'react-icons/vsc'
import { CiSettings } from 'react-icons/ci'
import { Row } from 'reactstrap'
import logo from '../Images/Knowtify.png'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {
  const goto = useNavigate()
  const sidebar = [
    {
      item: 'Dashboard',
      icon: <GoDashboard size="2.5rem" className="sidebar_icon" />,
      link:'/dashboard',
    },
    {
      item: 'Messages',
      icon: <BsChatLeftText size="2.5rem" className="sidebar_icon" />,
      link:'/messages',
    },
    {
      item: 'Admin',
      icon: <HiOutlineUsers size="2.5rem" className="sidebar_icon" />,
    },
    {
      item: 'Farmers',
      icon: <GiFarmer size="2.9rem" className="sidebar_icon" />,
      link:'/farmers',
    },
    {
      item: 'Feedbacks',
      icon: <VscFeedback size="2.8rem" className="sidebar_icon" />,
    },
    {
      item: 'Settings',
      icon: <CiSettings size="2.8rem" className="sidebar_icon" />,
    },
  ]
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="logo" />
      <div className="mt-3">
        {sidebar.map((item) => (
          //   className={`sidemenu ${location.pathname === "/sole-agents" && "active_side_menu"
          // }`}
          <div  onClick={()=>goto(item.link)}>
            <p className="sidebar_item_p">
             <span>{item.icon}</span> <span>{item.item}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
