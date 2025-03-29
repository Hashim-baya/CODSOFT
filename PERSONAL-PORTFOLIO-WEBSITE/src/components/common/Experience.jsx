import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6
    }
  };

function Experience() {
  return (
    <section>
        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#5BADFF] to-[#1373D1] font-bold text-xl md:text-2xl text-center mb-10'>Experience With</h3>

        <div className='flex justify-center items-center mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80  '>
            <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={2000} 
                className='w-full '
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}
                itemClass="carousel-item-padding-20-px"
            >
              <div>
                <FontAwesomeIcon icon={faReact} size="2xl" className='text-[#61DAFB]'  />
              </div>

              <div>
                <SiTailwindcss  className='text-[#06B6D4] text-4xl'  />
              </div>

              <div>
                <FontAwesomeIcon icon={faJs} size="2xl" className='text-[#F7DF1E]'  />
              </div>
               
              <div>
                <FontAwesomeIcon icon={faHtml5} size="2xl" className='text-[#E34F26]'  />
              </div>
                
              <div>
                <FontAwesomeIcon icon={faCss3} size="2xl" className='text-[#1572B6]'  />
              </div>
                
              <div>
                <FontAwesomeIcon icon={faGitAlt} size="2xl" className='text-[#F1502F]'  />
              </div>
                
            </Carousel>
        </div>
    </section>
  )
}

export default Experience