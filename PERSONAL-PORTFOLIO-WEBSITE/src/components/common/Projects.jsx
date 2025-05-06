import React from 'react'
import MovieApp from '../images/MovieWebsite.png'
import { Link } from 'react-router' 
import Datathon from '../images/Datathon.png'
import Datathon1 from '../images/Datathon1.png'
import Datathon2 from '../images/Datathon2.png'
import MovieWeb from '../images/MovieWeb.png'
import Button from './Button'



function Projects() {

  
  return (
    <section className='mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80'>
      <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#D5491D] font-bold text-xl md:text-2xl text-center my-10'>Projects</h3>

      <main className='flex  justify-start items-center gap-5 px-8 overflow-x-auto h-[550px] '> 

       
          <Link to='/projects' >

            <div className='flex flex-col justify-start items-start  w-[250px]  rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={MovieApp} alt="Movie Website Image" className=' h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>MOVIE WEBSITE</p>
              <p className='text-white pl-2 text-[0.8rem]'>A responsive web application that lets users search for movies and view details like posters, release dates...</p>
                <p className='pl-2'>
                <span className='text-[#FF8660] font-bold '>Tech Stack:</span> 
                <span className='text-[#9A33FF] font-bold '>React, TAILWIND CSS, TMDB API</span>
                </p>  

              <div className='pl-2 flex gap-2 my-3'>
                <Button buttonVariant='Primary' Message='Live Demo' onClick={() => window.open('https://alx-fe-capstone-project-znpm.vercel.app/', '_blank')} />
                <Button buttonVariant='Secondary' Message='Github Repo' onClick={() => window.open('https://github.com/Hashim-baya/ALX-FE-CAPSTONE-PROJECT', '_blank')} />
              </div>
            </div>

          </Link>

          <Link to='/projects' >

            <div className='flex flex-col justify-start items-start   w-[250px]   rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={Datathon} alt="Datathon Image" className=' h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>DATATHON WEBSITE</p>
              <p className='text-white pl-2 text-[0.8rem]'>A responsive web application that lets users search for movies and view details like posters, release dates...</p>
                <p className='pl-2'>
                <span className='text-[#FF8660] font-bold '>Tech Stack:</span> 
                <span className='text-[#9A33FF] font-bold '>React, TAILWIND CSS, </span>
                </p>  

              <div className='pl-2 flex gap-2 my-3'>
                <Button buttonVariant='Primary' Message='Live Demo' onClick={() => window.open('https://datathon-sigma.vercel.app/', '_blank')} />
                <Button buttonVariant='Secondary' Message='Github Repo' onClick={() => window.open('https://github.com/Murags/datathon/', '_blank')} />
              </div>
            </div>

          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px] rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={MovieWeb} alt="Movie Website Image" className='h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>MOVIE WEBSITE</p>
              <p className='text-white pl-2 text-[0.8rem]'>A responsive web application that lets users search for movies and view details like posters, release dates...</p>
                <p className='pl-2'>
                <span className='text-[#FF8660] font-bold '>Tech Stack:</span> 
                <span className='text-[#9A33FF] font-bold '>React, TAILWIND CSS, TMDB API</span>
                </p>  

                <div className='pl-2 flex gap-2 my-3'>
                  <Button buttonVariant='Primary' Message='Live Demo' onClick={() => window.open('https://alx-fe-capstone-project-znpm.vercel.app/', '_blank')} />
                  <Button buttonVariant='Secondary' Message='Github Repo' onClick={() => window.open('https://github.com/Hashim-baya/ALX-FE-CAPSTONE-PROJECT', '_blank')} />
                </div>
              </div>

          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px] rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={Datathon1} alt="Datathon Image" className='h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>DATATHON WEBSITE</p>
              <p className='text-white pl-2 text-[0.8rem]'>A responsive web application that lets users search for movies and view details like posters, release dates...</p>
                <p className='pl-2'>
                <span className='text-[#FF8660] font-bold '>Tech Stack:</span> 
                <span className='text-[#9A33FF] font-bold '>React, TAILWIND CSS</span>
                </p>  

              <div className='pl-2 flex gap-2 my-3'>
                <Button buttonVariant='Primary' Message='Live Demo' onClick={() => window.open('https://datathon-sigma.vercel.app/', '_blank')} />
                <Button buttonVariant='Secondary' Message='Github Repo' onClick={() => window.open('https://github.com/Murags/datathon/', '_blank')} />
              </div>
            </div>
            
          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px]  rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={MovieApp} alt="Movie Website Image" className=' h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>MOVIE WEBSITE</p>
              <p className='text-white pl-2 text-[0.8rem]'>A responsive web application that lets users search for movies and view details like posters, release dates...</p>
                <p className='pl-2'>
                <span className='text-[#FF8660] font-bold '>Tech Stack:</span> 
                <span className='text-[#9A33FF] font-bold '>React, TAILWIND CSS, TMDB API</span>
                </p>  

              <div className='pl-2 flex gap-2 my-3'>
                <Button buttonVariant='Primary' Message='Live Demo' onClick={() => window.open('https://alx-fe-capstone-project-znpm.vercel.app/', '_blank')} />
                <Button buttonVariant='Secondary' Message='Github Repo' onClick={() => window.open('https://github.com/Hashim-baya/ALX-FE-CAPSTONE-PROJECT', '_blank')} />
              </div>
            </div>
            
          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px]  rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={Datathon2} alt="Datathon Image" className='h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>DATATHON WEBSITE</p>
              <p className='text-white pl-2 text-[0.8rem]'>A responsive web application that lets users search for movies and view details like posters, release dates...</p>
                <p className='pl-2'>
                <span className='text-[#FF8660] font-bold '>Tech Stack:</span> 
                <span className='text-[#9A33FF] font-bold '>React, TAILWIND CSS, TMDB API</span>
                </p>  

              <div className='pl-2 flex gap-2 my-3'>
                <Button buttonVariant='Primary' Message='Live Demo' onClick={() => window.open('https://datathon-sigma.vercel.app/', '_blank')} />
                <Button buttonVariant='Secondary' Message='Github Repo' onClick={() => window.open('https://github.com/Murags/datathon/', '_blank')} />
              </div>
            </div>
            
          </Link>
      </main>


    </section>
  )
}

export default Projects