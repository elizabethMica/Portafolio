import React from 'react'
import foto from "../assets/foto/mics.jpeg"
import { NavLink, Link} from 'react-router-dom'
import {FaLocationDot } from "react-icons/fa6";
import cvEn from "../assets/foto/Elizabeth Micaela Gurdzel cv (en).pdf"
import cvSp from "../assets/foto/Elizabeth Micaela Gurdzel  cv.pdf"
import About from './About'
import { useState } from "react"

const Landing = () => {

  // text-[#002857] Texto
  //text-[#0A5587] Texto mas claro
  //text-[#99D9D9] acciones, botones

  const [open, setOpen] = useState(false);

  const downloadCv =()=>{
    setOpen(!open)
  }
    
  return (
    <>
    <div className='flex flex-col justify-center items-center  xl:flex-row h-screen bg-[#252525]'  id='EMG'>
        <div className='sm:mx-2 md:mx-10 my-4 '>
            <img className=' rounded-full w-[400px] h-[400px] object-cover object-center ' src={foto} alt="picture" />
        </div>
        <div className='mx-10 md:mx-2'>
          <p className='font-sansRegular font-bold text-xl text-gray-300 text-center justify-center '>Hi! I'm</p>
            <h1 className='text-5xl text-center text-[#419999] font-sansBold px-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[1500ms] hover:animate-ease-linear cursor-pointer'>Elizabeth Micaela Gurdzel</h1>
            <h5 className='text-gray-300  text-xl text-center font-bold font-sansRegular '>A passionate Frontend Developer</h5>


        <div className='flex flex-row justify-center mt-4'>
          <div className='flex flex-col'>
        <button onClick={downloadCv} className='border-2 border-[#99D9D9] rounded-full p-3  text-white hover:text-black font-sansRegular font-bold mx-2 hover:bg-[#99D9D9]'>Download CV</button>
          {open === true ? (<div className='flex flex-row mt-4'>
            <a href={cvEn} download="Elizabeth Micaela Gurdzel (en)"><button className='text-[#99D9D9]  font-sansRegular font-bold mx-2 hover:text-[#419999]'>English</button></a>
            <a href={cvSp} download="Elizabeth Micaela Gurdzel"><button className='text-[#99D9D9]  font-sansRegular font-bold mx-2 hover:text-[#419999]'>Español</button></a>
          </div>) : null}

          </div>  
        <NavLink to="/contact"><button className='border-2 border-[#99D9D9]  bg-[#99D9D9] rounded-full p-3  font-sansRegular mx-2 hover:bg-[#419999] hover:text-white hover:text-light hover:border-[#419999] font-bold animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'>Contact me!</button></NavLink>
        </div>
        </div>
    </div>
    </>
  )
}

export default Landing