import React from 'react'
import { useRoutes } from 'react-router-dom'
import LogIn from '../Auth/LogIn'
import AppIndex from './AppIndex'
import Dashboard from '../Dashboard'
import Register from '../Regista'
import Message from '../Messages/Message'
import SendMessage from '../Messages/SendMessages'
import Farmers from '../Farmers/Farmers'
import OnboardFarmers from '../Farmers/OnboradFarmers'

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
          element: <OnboardFarmers/>,
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
