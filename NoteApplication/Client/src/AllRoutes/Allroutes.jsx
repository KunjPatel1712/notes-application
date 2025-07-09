import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AddNote from '../Pages/AddNote'
import Note from '../Pages/Note'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const Allroutes = () => {
  return (
    <div style={{width:"90%",margin:"auto"}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-note" element={<AddNote />} />
            <Route path='/notes' element={<Note />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes