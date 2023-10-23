import './App.css'
import React from 'react'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Projects from './components/Projects'
import Tecnologies from './components/Tecnologies'
import Contact from './components/Contact'
import About from './components/About'

function App() {

  return (
    <>
      <Navbar path = "/:" />
      <Routes>
        <Route path="/Portafolio/" element={<Landing/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/technologies" element={<Tecnologies/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>

  )
}

export default App
