import React from 'react'
import { useRoutes } from 'react-router-dom'
import LogIn from '../Auth/LogIn'
import AppIndex from './AppIndex'
import Notification from '../Notification'
import Dashboard from '../Dashboard'
import Messages from '../SendMessages'
import SendMessage from '../SendMessages'
import Message from '../Message'

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
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
            path: '/messages',
            element: <Message/>,
          },
        {
          path: '/send-message',
          element: <SendMessage/>,
        },
        {
          path: '/notification',
          element: <Notification />,
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
