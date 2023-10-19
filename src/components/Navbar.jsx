import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-14 flex flex-row w-full items-center justify-between z-10 fixed'>
      
        <h3 className='mx-4 font-sansBold text-[#99D9D9] text-xl hover:animate-shake hover:animate-once hover:animate-duration-1000'><NavLink to='/'>Elizabeth M. Gurdzel</NavLink></h3>
        <div className='mx-4'>
          <NavLink to="/about"  className='mx-2 font-sansRegular text-lg hover:border-b-2 hover:border-[#99D9D9]  text-[#99D9D9]'>About</NavLink>
          <NavLink to="/projects"  className='mx-2 font-sansRegular text-lg hover:border-b-2 hover:border-[#99D9D9] text-[#99D9D9]' >Projects</NavLink>
          <NavLink to="/tecnologies"  className='mx-2 font-sansRegular text-lg hover:border-b-2 hover:border-[#99D9D9] text-[#99D9D9]'>Tecnologies</NavLink>
          <NavLink to="/contact" className='mx-2 font-sansRegular text-lg hover:border-b-2 hover:border-[#99D9D9] text-[#99D9D9]'>Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar