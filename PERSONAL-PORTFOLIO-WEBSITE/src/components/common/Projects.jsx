import React from 'react'
import MovieApp from '../images/MovieWebsite.png'
import { Link } from 'react-router' 
import Datathon from '../images/Datathon.png'
import Datathon1 from '../images/Datathon1.png'
import Datathon2 from '../images/Datathon2.png'
import MovieWeb from '../images/MovieWeb.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1700 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1700, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min:430 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 430, min: 0 },
    items: 1
  }
};

function Projects() {
  return (
    <section className='mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80'>
      <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#D5491D] font-bold text-xl md:text-2xl text-center my-10'>Projects</h3>

      <main className='flex  justify-center items-center gap-5  overflow-x-hidden  '>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          className='w-full h-[400px]   '
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}
          itemClass='px-10'
          swipeable={true}
        >
          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start  w-[250px] h-[300px]  rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={MovieApp} alt="Movie Website Image" className=' h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>MOVIE WEBSITE</p>
            </div>
          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px] h-[300px]  rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={Datathon} alt="Datathon Image" className=' h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>DATATHON WEBSITE</p>
            </div>
          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px] h-[300px] rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={MovieWeb} alt="Movie Website Image" className='h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>MOVIE WEBSITE</p>
            </div>
          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px] h-[300px] rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={Datathon1} alt="Datathon Image" className='h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>DATATHON WEBSITE</p>
            </div>
          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px] h-[300px] rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={MovieApp} alt="Movie Website Image" className=' h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>MOVIE WEBSITE</p>
            </div>
          </Link>

          <Link to='/projects' >
            <div className='flex flex-col justify-start items-start   w-[250px] h-[300px] rounded-lg shadow-sm bg-[#2A2A2A] shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105'>
              <img src={Datathon2} alt="Datathon Image" className='h-[250px] w-[250px] rounded-t-lg' />
              <p className='font-semibold text-[#C5C5C5] pl-2 pt-2 text-[0.8rem]'>Click to Visit</p>
              <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8660] to-[#9A33FF] font-sans pl-2'>DATATHON WEBSITE</p>
            </div>
          </Link>
        </Carousel>
       
       
      </main>


    </section>
  )
}

export default Projects