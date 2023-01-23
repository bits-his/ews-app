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
      icon: <GoDashboard size="1.5rem" />,
    },
    {
      item: 'Messages',
      icon: <BsChatLeftText size="1.5rem" />,
    },
    {
      item: 'Admin',
      icon: <HiOutlineUsers size="1.5rem" />,
    },
    {
      item: 'Farmers',
      icon: <GiFarmer size="1.9rem" />,
    },
    {
      item: 'Feedbacks',
      icon: <VscFeedback size="1.8rem" />,
    },
    {
      item: 'Settings',
      icon: <CiSettings size="1.8rem" />,
    },
  ]
  return (
    <div className="sidebar">
      {sidebar.map((item) => (
        <div className="sidebar_item">
          <p className="sidebar_item_p">
            {item.icon} {item.item}
          </p>
        </div>
      ))}
    </div>
  )
}
