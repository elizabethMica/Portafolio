import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPerson } from 'react-icons/fa6';
import {AiFillCarryOut} from 'react-icons/ai'
import {AiFillCustomerService} from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa';
import {HiSparkles} from 'react-icons/hi'


const About = () => {


  return (
    <div className='flex flex-col justify-center items-center px-20 h-screen bg-[#252525]' >

        <div  className=' flex flex-col justify-evenly  border-b-2 border-gray-300'>
        <div className=' flex flex-col justify-center items-start pt-2 pb-2'>
              <div className='flex flex-row my-2'>
               <FaLocationDot color={"#419999"} size={20}/>
               <span className='text-gray-300 px-1 font-sansRegular'> Buenos Aires, Argentina</span>
              </div>

              <div className='flex flex-row my-2'>
               <FaPerson color={"#419999"} size={20}/>
               <span className='text-gray-300 px-1 font-sansRegular'>I'm 21</span>
              </div>
              <div className='flex flex-row my-2'>
               <AiFillCarryOut color={"#419999"} size={20}/>
               <span className='text-[#88f1f1] px-1 font-sansRegular'>Full time availability</span>
              </div>
          </div>
        <p  className='font-sansRegular text-end  text-white text-sm w-fit sm:text-xl pb-10'>Hello! My name is Elizabeth Micaela Gurdzel. I'm from Argentina and I'm 21 years old. I'm fluent in English and I'm a native Spanish speaker. I'm a responsible, positive and organized person with experience working in teams. Since 2022 I was intrigued in computers, I always had the question "Who makes all the websites and games?" in my mind. Until a family member showed me the programing world. Since that day, I've been learning and reading about programming languages. I became a Fullstack Web Developer by attending a bootcamp of 800 hours. And eventually I found myself inmersed in all technologies and frameworks of the Frontend Development. Nowadays I'm looking for new opportunities to develop my skills in the IT industry and take on new challenges to grow even more and learn from others. I'm eager to show the world the things I'm capable of doing!<br/>
        Funny things about me: I love animals (dogs especially), I love listening to music while I'm coding and solving errors and I love Volleyball and helping my teammates improve every day. </p>
           
        </div>
        <div className=' flex flex-col pt-10'>
            <span className='font-bold font-sansBold text-center text-2xl text-[#4199999f]'>"Anyone who has never made a mistake; <br/> has never tried anything new"</span>
            <span className=' font-sansBold text-sm text-center text-gray-300'>-Albert Einstein</span>
        </div>
        
       

    </div>
  )
}

export default About