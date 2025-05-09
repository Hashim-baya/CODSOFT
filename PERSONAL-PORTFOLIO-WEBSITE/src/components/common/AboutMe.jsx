import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router'

function AboutMe() {

    const donwloadCV = () => {
        const link = document.createElement('a');
        link.href = '/documents/HASHIM_BAYA_Resume.pdf'; // Adjust the path to your PDF file"'; 
        link.download = 'HASHIM_BAYA_NASSORO.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    
      const navigate = useNavigate();
      
      const getInTouch = () => {
          
          navigate('/contact');
      }

  return (
    <section  className='mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80 my-4'>

        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#5BADFF] to-[#1373D1] font-bold text-xl md:text-2xl text-center mb-8'>About Me</h3>

         <div className='text-start text-white flex flex-col items-center justify-start md:w-3/4 '>
          <div className=''>
            <h2 className='text-xl md:text-2xl mb-4'>👋 Hi, I'm <span className='font-extrabold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-l from-[#FF8660] to-[#9A33FF]'>HASHIM BAYA NASSORO</span></h2>
              <p className='text-[#C5C5C5] lg:text-lg'>
                <span>A passionate</span>
                <span className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#1373D1]'> Frontend Developer | UI/UX Designer</span>
                <span> dedicated to crafting seamless digital experiences. I specialize in </span>
                <span><span className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#1373D1]'>Frontend Development</span> using <span className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#1373D1]'>React.js</span> and <span className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#1373D1]'>Tailwind CSS,</span> and <span className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#1373D1]'>UI/UX Design</span>, </span>
                <span>with a focus on creating visually appealing and user-friendly interfaces.</span>
                <span> I am committed to delivering high-quality work and continuously improving my skills.</span>
              </p>
              <p className='font-semibold mt-3 mb-3'>🚀 Let’s build something amazing together!</p>
          </div>  

          <div className='flex flex-col md:flex-row gap-4 w-full justify-start md:mt-4 '>
            <Button Message='Get in Touch' buttonVariant='Primary' onClick={getInTouch} />
            <Button Message='Download CV' buttonVariant='Secondary' onClick={donwloadCV} />
          </div>
        </div>

    </section>
  )
}

export default AboutMe