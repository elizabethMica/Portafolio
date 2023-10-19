import React from 'react'

import TechnologiesCards from './TechnologiesCards';

const Tecnologies = () => {
  return (
    <div className='pt-20 bg-[#252525] h-screen flex flex-col justify-center items-center'>
    <TechnologiesCards/>
    <span className='text-xl font-bold text-[#99D9D9] font-sansBold p-3'>I'm eager to learn more!</span>
  </div> 
  )
}

export default Tecnologies