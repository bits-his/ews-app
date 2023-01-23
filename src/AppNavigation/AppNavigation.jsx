import React from 'react'
import { useRoutes } from 'react-router-dom'
import LogIn from '../Auth/LogIn'
import AppIndex from './AppIndex'
import Messages from '../Messages'
import Notification from '../Notification'
import Farma from '../Farma'

function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <LogIn />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <LogIn /> },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/notification',
          element: <Notification />,
        },
        {
          path: '/farma',
          element: <Farma />,
        },
        
      ],
    },
  ])
  return element
}
export default AppNavigation
