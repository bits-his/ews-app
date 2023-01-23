import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Messages from './AppNavigation/Messages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Messages />
    </>
  )
}

export default App
