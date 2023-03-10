import React from 'react'
import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Dashboard from '../Dashboard'
import Register from '../Auth/Regista'
import Message from '../Messages/Message'
import SendMessage from '../Messages/SendMessages'
import Farmers from '../Farmers/Farmers'
import OnboardFarmers from '../Farmers/OnboradFarmers'
import Profile from '../Profile/Profile'

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
          path: '/farmers',
          element: <Farmers />,
        },
        {
          path: '/onboard-farmers',
          element: <OnboardFarmers />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
