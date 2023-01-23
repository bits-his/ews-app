import React from 'react'
import { GoDashboard } from 'react-icons/go'
import { BsChatLeftText } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { GiFarmer } from 'react-icons/gi'
import { VscFeedback } from 'react-icons/vsc'
import { CiSettings } from 'react-icons/ci'
import { Row } from 'reactstrap'
import './Sidebar.css'
export default function Sidebar() {
  const sidebar = [
    {
      item: 'Dashboard',
      icon: <GoDashboard size="2.5rem" className="sidebar_icon" />,
    },
    {
      item: 'Messages',
      icon: <BsChatLeftText size="2.5rem" className="sidebar_icon" />,
    },
    {
      item: 'Admin',
      icon: <HiOutlineUsers size="2.5rem" className="sidebar_icon" />,
    },
    {
      item: 'Farmers',
      icon: <GiFarmer size="2.9rem" className="sidebar_icon" />,
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
      {sidebar.map((item) => (
        <div className="sidebar_item">
          <p className="sidebar_item_p">
            {item.icon} <span>{item.item}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
