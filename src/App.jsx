import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Messages from './AppNavigation/Messages'
import AppNavigation from './AppNavigation/AppNavigation'

function App() {
  return (
    <>
    <Messages />
    <div>
      <AppNavigation />
    </div>
    </>
    
  )
}

export default App
