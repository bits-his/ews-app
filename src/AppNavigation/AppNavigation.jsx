import React from 'react'
import { useRoutes } from 'react-router-dom'
import LogIn from '../Auth/LogIn'
import AppIndex from './AppIndex'
import Messages from './Messages'

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
      ],
    },
  ])
  return element
}
export default AppNavigation
