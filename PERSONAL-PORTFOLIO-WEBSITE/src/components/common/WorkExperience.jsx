import React from 'react'
import { 
  FaLaptopCode, 
  FaBriefcase, 
  FaCode, 
  FaUserTie, 
  FaTrophy, 
  FaClock ,
  FaGithub,
  FaCodeBranch,
} from "react-icons/fa";

function WorkExperience() {
  return (
    <section className='mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80 my-4'>
      <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#5BADFF] to-[#1373D1] font-bold text-xl md:text-2xl text-center mb-8'>Work Experience</h3>

      <main>
        <div>
          <div className="flex items-center gap-2">  
            <FaLaptopCode className="text-[#FF8660] text-xl" />  
            <h3 className="font-bold text-lg text-white">CODSOFT Internship</h3>  
          </div>  
          <p className="flex items-center gap-2 text-[#C5C5C5]">  
            <FaBriefcase className="text-sm" />  
            <span className='font-bold'>Web Development Intern | Summer 2025</span>  
          </p>  
          <p className='text-[#C5C5C5] font-serif text-sm mt-4'>
            <span>Collaborated with a team of developers to design and implement user-friendly web applications.</span><br></br>
            <span>Engineered 3+ responsive web applications using React.js and Tailwind CSS, improving user engagement by 40%.</span><br></br>
            <span>Spearheaded API integration projects (including TMDB API) to deliver dynamic content with 99% uptime reliability.</span><br></br>
            <span>Reduced page load times by 25% through code optimization and lazy loading techniques.</span>
          </p>
        </div>

        <div className='my-4'>
          <div className="flex items-center gap-2">  
            <FaCode className="text-[#9A33FF] text-xl" />  
            <h3 className="font-bold text-lg text-white">Frontend Developer</h3>  
          </div>  
          <p className="flex items-center gap-2 text-[#C5C5C5]">  
            <FaUserTie className="text-sm" />  
            <span className='font-bold'>Freelance | 2023-Present</span>  
          </p> 
          <p className='text-[#C5C5C5] font-serif text-sm mt-4'>
            <span>Architected a movie discovery platform with React/Next.js that serves 500+ monthly active users.</span><br></br>
            <span>Implemented CI/CD pipelines using Vercel, achieving 100% deployment success rate.</span><br></br>
            <span>Pioneered accessibility improvements that boosted WCAG compliance to AA standards.</span>
          </p> 
        </div>

        <div className='my-4'>
          <div className="flex items-center gap-2 ">  
            <FaGithub className="text-[#6cc644] text-xl" />  
            <h3 className="font-bold text-lg text-white">Open Source Contributor</h3>  
          </div>  
          <p className="flex items-center gap-2 text-[#C5C5C5]">  
            <FaCodeBranch className="text-sm" />  
            <span className='font-bold'>GitHub Community | 2023-Present</span>  
          </p>  
          <p className='text-[#C5C5C5] font-serif text-sm mt-4'>
            <span>Resolved 15+ critical bugs in popular React libraries, impacting 50,000+ downstream users.</span><br></br>
            <span>Authored technical documentation that became official project reference material.</span><br></br>
            <span>Maintained 98% code review approval rate across contributions.</span>
          </p>
        </div>

      </main>
    </section>
  )
}

export default WorkExperience