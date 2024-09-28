import { useState } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
  
<Route path='/'  element={<Home/>} />
<Route path='/signup'  element={<Signup/>} />
<Route path='/login'  element={<Login/>} />
    </Routes>
 
    </>
  )
}

export default App
