import React from 'react'
import { useRoutes } from 'react-router-dom'
import LogIn from '../Auth/LogIn'
import AppIndex from './AppIndex'
import Notification from '../Notification'
import Dashboard from '../Dashboard'
import Messages from '../SendMessages'
import SendMessage from '../SendMessages'
import Message from '../Message'
import Farmers from '../Farmers'
import Register from '../Regista'

function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <Register />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <Register /> },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/messages',
          element: <Message />,
        },
        {
          path: '/send-message',
          element: <SendMessage />,
        },
        {
          path: '/notification',
          element: <Notification />,
        },
        {
          path: '/farmers',
          element: <Farmers />,
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
