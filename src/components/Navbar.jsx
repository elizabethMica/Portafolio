import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaXmark} from 'react-icons/fa6'

const Navbar = () => {

  let Links =[
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
    {name: 'Technologies', link: '/technologies'},
    {name: 'Contact', link: '/contact'},
  ]

  const linkGithub = "https://github.com/elizabethMica";

  const [isOpen, setIsOpen] = useState(false)
  return (

      <div className='w-full fixed z-10 top-0 left-0'>
         <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-[#252525]'>
                {/* logo section */}
              <div className='flex cursor-pointer items-center gap-1'>
                <NavLink to='/Portafolio/'>
                <span className='font-bold font-sansBold text-xl text-[#99D9D9]'>Elizabeth M. Gurdzel</span>
                  </NavLink>
              </div>

              <div onClick={()=> setIsOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                  isOpen ? 
                  <FaXmark size={20} color={'#99D9D9'}/>
                  :
                  <AiOutlineMenu size={20} color={'#99D9D9'}/>
                }
              </div>



            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#252525] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
              {
                Links.map(l =>(
                  <li key={l.name} className='font-sansRegular my-7 md:my-0 md:ml-8 text-[#99D9D9]' onClick={()=> setIsOpen(!isOpen)}><NavLink className='hover:border-b-2 hover:border-[#99D9D9]' to={l.link}>{l.name}</NavLink></li>
                ))
              }
              <li key="GitHub" className='font-sansRegular my-7 md:my-0 md:ml-8 text-[#99D9D9]' onClick={()=> setIsOpen(!isOpen)}><Link target="_blank" className='hover:border-b-2 hover:border-[#99D9D9]' to={linkGithub }>GitHub</Link></li>
            </ul>
 

         </div>
      </div>

  )
}

export default Navbar