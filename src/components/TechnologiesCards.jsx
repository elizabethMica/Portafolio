import React from 'react'
import { SiRedux, SiPostgresql, SiTailwindcss, SiExpress, SiSequelize, SiTypescript, SiNextdotjs, SiBootstrap} from "../../node_modules/react-icons/si";
import { FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaHtml5} from "react-icons/fa";

const TechnologiesCards = () => {
  return (
    <div className=' flex flex-row justify-center flex-wrap h-full bg-[#252525]  items-center gap-10 mx-10'>


     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>React</span>
       <FaReact size={45} title="React" color={"rgb(30, 144, 255)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>Redux</span>
      <SiRedux size={45} title="Redux" color={"rgb(186, 85, 211)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>Tailwind</span>
      <SiTailwindcss size={45} title="Tailwind" color={"rgb(30, 144, 255)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>HTML</span>
      <FaHtml5 size={45} title="HTML" color={"rgb(255, 140, 0)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>CSS</span>
      <FaCss3Alt size={45} title="CSS" color={"rgb(65, 105, 225)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>JavaScript</span>
      <FaJsSquare size={45} title="JavaScript" color={"rgb(255, 215, 0)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>Express</span>
      <SiExpress size={45} title="Express" className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>Node.js</span>
      <FaNodeJs size={45} title="Node.js"  color={"rgb(50, 205, 50)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>PostgreSQL</span>
      <SiPostgresql size={45} title="PostgreSQL" color={"rgb(70, 130, 180)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
     <div className='shadow-[0px_0px_27px_-3px_rgba(0,0,0,1)] hover:bg-[#193f3f] w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
      <span className='font-bold font-sansBold text-3xl text-center py-2 justify-self-start text-white'>Sequelize</span>
      <SiSequelize size={45} title="Sequelize" color={"rgb(25, 25, 112)"} className='animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear'/>
     </div>
    

    </div>
  )
}

export default TechnologiesCards