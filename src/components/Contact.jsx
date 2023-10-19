import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {SiGithub, SiLinkedin} from "../../node_modules/react-icons/si";
import {IoIosMail, IoLogoWhatsapp} from "../../node_modules/react-icons/io";
import {AiFillPhone} from '../../node_modules/react-icons/ai';
import cvEn  from "../assets/foto/Elizabeth Micaela Gurdzel cv (en).pdf"
import  cvSp  from "../assets/foto//Elizabeth Micaela Gurdzel  cv.pdf"


const Contact = () => {

  const linkGithub = "https://github.com/elizabethMica";
  const linkLinkedIn = "https://www.linkedin.com/in/elizabeth-micaela-gurdzel/";

  const [open, setOpen] = useState(false);

  const downloadCv =()=>{
    setOpen(!open)
  }

  return (
    <div className='bg-[#252525]'>
      <div className='h-screen flex flex-col items-center'>
        <h1 className='mt-20 font-sansBold text-4xl text-[#99D9D9] text-center justify-center items-center animate-pulse animate-infinite animate-duration-[1500ms]'>Contact me!</h1>
        <span className='text-xl font-bold text-[#4e4e4e] font-sansBold text-center p-3'>You can contact me through GitHub and LinkedIn. <br/> You can also send me an Email or a message via Whatsapp</span>
        <div className='flex flex-row justify-evenly items-center my-20 w-full'>
          <Link to={linkGithub} target="_blank" className=''><SiGithub size={40} color="#FFFFFF"  title="GitHub" className='hover:animate-wiggle-more hover:animate-infinite hover:animate-duration-1000 hover:animate-ease-linear'/></Link>
          <Link to={linkLinkedIn} target="_blank" className=''><SiLinkedin size={40} color="#FFFFFF" title="LinkedIn" className='hover:animate-wiggle-more hover:animate-infinite hover:animate-duration-1000 hover:animate-ease-linear'/></Link>
          <a href="mailto:gurdzelm@gmail.com">
            <IoIosMail color="#FFFFFF" title="Email" size={45} className='hover:animate-wiggle-more hover:animate-infinite hover:animate-duration-1000 hover:animate-ease-linear'/>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=541132732951">
            <IoLogoWhatsapp color="#FFFFFF" title="Whatsapp" size={45} className='hover:animate-wiggle-more hover:animate-infinite hover:animate-duration-1000 hover:animate-ease-linear'/>
          </a>
          
        </div>
        {/* <a href={cv} download="Elizabeth Micaela Gurdzel cv"><button className=' rounded-full p-3  font-sansRegular font-bold mx-2 bg-[#99D9D9] hover:bg-[#0A5587]' >Download my Resume here!</button></a> */}

        <button onClick={downloadCv} className=' rounded-full p-3  text-[#99D9D9] hover:text-black font-sansRegular font-bold mx-2 hover:bg-[#99D9D9] '>Download CV</button>
          {open === true ? (<div className='flex flex-row mt-4'>
            <a href={cvEn} download="Elizabeth Micaela Gurdzel (en)"><button className='text-[#99D9D9]  font-sansRegular font-bold mx-2 hover:text-[#419999]'>English</button></a>
            <a href={cvSp} download="Elizabeth Micaela Gurdzel"><button className='text-[#99D9D9]  font-sansRegular font-bold mx-2 hover:text-[#419999]'>Español</button></a>
          </div>) : null}
        
      </div>
    </div>
  )
}

export default Contact