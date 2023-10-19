import './App.css'

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
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/tecnologies" element={<Tecnologies/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>

  )
}

export default App
