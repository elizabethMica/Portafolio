import React from 'react'
import caravane from "../assets/foto/carav.png"
import vg from "../assets/foto/videogames_home.png"
import ibmh from "../assets/foto/thumbnail.png"
import ibmhVideo from "../assets/foto/scrnli_4_1_2024_19-14-34.mp4"
import { NavLink } from 'react-router-dom'

const Projects = () => {

    const linkCaravana = "https://caravana.onrender.com/";
    const repositoryVg = "https://github.com/elizabethMica/Videogames";
    const linkIBMH = "https://ibmhurlinghamfront.onrender.com/"

  return (
    <div id='projects' className='flex flex-col justify-center items-center  bg-[#252525]  '>
        <h3 className='font-sansBold text-lg mt-20 text-white px-2 border-b-2 border-[#99D9D9] sm:text-2xl'>My Projects</h3>
        <div className='flex flex-col justify-center flex-wrap  items-center m-10 sm:flex-row'>

        <div className='m-4 flex flex-col justify-center sm:w-3/4' >
               <h4 className='font-sansBold text-white text-sm text-center my-2 sm:text-xl'>IBM Hurlingham</h4>
               <p className='font-sansRegular text-gray-400 text-sm sm:text-lg text-center'>This web application consists about getting the sermons of the church I go to. You can watch the sermon and share it. You can get to know about what we believe. And if you want to send a message you can fill a form.</p>
               <video autoPlay>
                <source src={ibmhVideo} type="video/mp4"/>
                Your browser does not support the video tag.
               </video>
               <NavLink to={linkIBMH} target="_blank">
                 <p className='font-sansRegular font-bold text-sm bg-[#99D9D9] text-black my-2 text-center sm:text-xl hover:bg-[#419999] rounded-full'>Click here to visit the website!</p>
               </NavLink> 
            </div>


        <div className='m-4 flex flex-col justify-center sm:w-3/4'>
               <h4 className='font-sansBold text-white text-sm text-center my-2 sm:text-xl'>Caravana Social</h4>
               <p className='font-sansRegular text-gray-400 text-sm text-center sm:text-lg'>The page consists of a job board that provides    users with the opportunity to receive training. Companies
                can post their job listings and offer training. It helps organizations integrate individuals with disabilities,
                those in challenging situations, and those recovering from problematic substance use. With a team
                composed of 8 people, we were able to work collaboratively with cooperation and communication. 
                
                </p>
               <img className=' my-1' src={caravane} alt="caravana social" />
               <NavLink to={linkCaravana}  target="_blank">
                 <p className='font-sansRegular font-bold text-sm bg-[#99D9D9] text-black my-2 text-center sm:text-xl hover:bg-[#419999] rounded-full'>Click here to visit the website!</p>
               </NavLink> 
            </div>

            <div className='m-4 flex flex-col justify-center sm:w-3/4' >
               <h4 className='font-sansBold text-white text-sm text-center my-2 sm:text-xl'>Videogames Library</h4>
               <p className='font-sansRegular text-gray-400 text-sm sm:text-lg text-center'>An application aimed at being a video game library with the goal of staying updated with all the existing
video games on the internet. It includes a search feature by name and the ability to create a card for your
own video game, allowing you to edit or delete it. It also offers the option to filter all games, whether they
are user-created or sourced from an external API.
</p>
               <img className=' my-1' src={vg} alt="videogames library" />
               <NavLink to={repositoryVg} target="_blank">
                 <p className='font-sansRegular font-bold text-sm bg-[#99D9D9] text-black my-2 text-center sm:text-xl hover:bg-[#419999] rounded-full'>Wanna see the repository? Click here!</p>
               </NavLink> 
            </div>

            
        </div>   
        <span className='text-xl font-bold text-[#99D9D9] font-sansBold p-3'>More projects to come!</span>
    </div>
  )
}

export default Projects