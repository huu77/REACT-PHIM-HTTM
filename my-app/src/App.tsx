
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter , Route, Link, Routes } from 'react-router-dom';
import { Wellcomepage,Err404, Login, Home, Register } from './features';
 
 
function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wellcomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<Err404 />} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
