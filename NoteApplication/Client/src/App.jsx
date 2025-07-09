import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Allroutes from './AllRoutes/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Allroutes/>
    </div>
  )
}

export default App
