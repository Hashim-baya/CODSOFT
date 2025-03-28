import React from 'react'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faDiscord, faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <section>
        <div className='bg-[#222222] relative bottom-0 right-0 left-0 text-[0.9rem] text-center py-4 mb-0'>
            
                {/* Discover  */}

            <h5 className='text-cyan-900 text-[0.8rem] font-semibold mb-2'>Discover</h5>

            <div className='flex flex-col justify-center mb-4'>
                <div className='flex justify-center space-x-6'>
                    <Link to='/' className='text-[#FF866080] text-[0.6rem] hover:text-[#FF866060] font-semibold'>HOME</Link>
                    <Link to='/about' className='text-[#FF866080] text-[0.6rem] hover:text-[#FF866060] font-semibold'>ABOUT</Link>
                    <Link to='/projects' className='text-[#FF866080] text-[0.6rem] hover:text-[#FF866060] font-semibold'>PROJECTS</Link>
                    <Link to='/contact' className='text-[#FF866080] text-[0.6rem] hover:text-[#FF866060] font-semibold'>CONTACT</Link>
                </div>
            </div>

                {/* Contact  */}

            <h5 className='text-cyan-900 text-[0.8rem] font-semibold mb-2'>📞 Contact</h5>

            <div className='flex flex-col justify-center mb-4'>
                <div className='flex justify-center space-x-6'>
                    <a href='mailto:bayahashim40@gmail.com' className='text-[#FF866080] text-[0.6rem] hover:text-[#FF866060] font-semibold'>EMAIL</a>
                    <p className='text-[#FF866080] text-[0.6rem] hover:text-[#FF866060] font-semibold'>
                        <span>📍 LOCATION: </span>
                        <span>MOMBASA, KENYA.</span>
                    </p>
                </div>
            </div>

                {/* Social Media  */}

            <h5 className='text-cyan-900 text-[0.8rem] font-semibold mb-2'>🌍 Social Media</h5>

            <div className='flex flex-col justify-center mb-4'>
                <div className='flex justify-center space-x-6'>

                    {/* Twitter */}
                    <a 
                        href="https://x.com/hashim_baya" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label='Twitter'
                        className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>

                    {/* Instagram */}
                    <a 
                        href="https://instagram.com/l.i.l__savage" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label='Instagram'
                         className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://linkedin.com/in/hashim-baya" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label='LinkedIn'
                        className=" text-gray-600  hover:text-[#0077B5] transition-colors duration-200 hover:scale-110 transform"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>

                        {/* GitHub */}

                    <a 
                        href="https://github.com/Hashim-baya" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label='GitHub'
                        className=" text-gray-600  hover:text-[#181717]  dark:hover:text-gray-300 transition-colors  duration-200 hover:scale-110 transform"
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>

                         {/* Discord */}

                         <a 
                        href="https://discord.com/channels/@HASHIM NASSORO" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label='GitHub'
                        className=" text-gray-600  hover:text-[#5865F2]  transition-colors duration-200 hover:scale-110 transform "
                    >
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                    </a>  

                </div>
            </div>
                

            <p className='text-white font-light text-[0.5rem]'>&copy; {currentYear} Hashim Baya Nassoro. All rights reserved. Made with ❤️ & Code. </p>
        </div>
    </section>
  )
}

export default Footer