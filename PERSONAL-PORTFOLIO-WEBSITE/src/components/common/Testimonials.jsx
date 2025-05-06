import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import SarahAvatar from '../images/Avartar3.jpg'
import Avatar2 from '../images/Avartar2.jpg'
import Avatar1 from '../images/Avartar1.jpg'
import Avatar4 from '../images/Avartar4.jpg'
import Avatar5 from '../images/Avartar5.jpg'
import Avatar6 from '../images/Avartar6.jpg'
import Avatar7 from '../images/Avartar7.jpg'
import Avatar8 from '../images/Avartar8.jpg'

function Testimonials() {
  return (
    <section  className='mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80 my-4'>
        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#D5491D] font-bold text-xl md:text-2xl text-center my-10'>Testimonials</h3>

        <main className='flex flex-wrap justify-center gap-5'>
            <div className="bg-[#2A2A2A] p-6 rounded-lg w-[300px] shadow-md shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105 mx-auto my-4">
                
                <FaQuoteLeft className="text-[#FF8660] opacity-50" />
                <p className="my-4 italic text-white">"Hashim rebuilt our movie API integration with flawless precision. Their React optimization reduced our load times by 40%, and they documented every step clearly. A developer who truly understands both code and user experience."</p>
                <div className="flex items-center gap-3">
                    <img src={SarahAvatar} className="w-10 h-10 rounded-full" />
                    <div>
                    <p className="font-bold">Sarah K.</p>
                    <p className="text-sm text-[#C5C5C5] font-bold">Senior Frontend Dev</p>
                    </div>
                </div>
                <FaQuoteRight className="text-[#FF8660] opacity-50 ml-auto" />

            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg w-[300px] shadow-md shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105 mx-auto my-4">
                
                <FaQuoteLeft className="text-[#FF8660] opacity-50" />
                <p className="my-4 italic text-white">"I’ve reviewed hundreds of pull requests, but Hashim’s clean, well-commented code stands out. Their TMDB API implementation is now our team’s gold standard for third-party integrations."</p>
                <div className="flex items-center gap-3">
                    <img src={Avatar1} className="w-10 h-10 rounded-full" />
                    <div>
                    <p className="font-bold">Mark T.</p>
                    <p className="text-sm text-[#C5C5C5] font-bold">Open Source Maintainer</p>
                    </div>
                </div>
                <FaQuoteRight className="text-[#FF8660] opacity-50 ml-auto" />

            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg w-[300px] shadow-md shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105 mx-auto my-4">
                
                <FaQuoteLeft className="text-[#FF8660] opacity-50" />
                <p className="my-4 italic text-white">"Hashim led our hackathon team through 48 sleepless hours with unmatched focus. They translated complex requirements into a working prototype while keeping morale high. The definition of a team player."</p>
                <div className="flex items-center gap-3">
                    <img src={Avatar8} className="w-10 h-10 rounded-full" />
                    <div>
                    <p className="font-bold">Priya N.</p>
                    <p className="text-sm text-[#C5C5C5] font-bold">Hackathon Teammate</p>
                    </div>
                </div>
                <FaQuoteRight className="text-[#FF8660] opacity-50 ml-auto" />

            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg w-[300px] shadow-md shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105 mx-auto my-4">
                
                <FaQuoteLeft className="text-[#FF8660] opacity-50" />
                <p className="my-4 italic text-white">"Rare to find someone who communicates technical issues as clearly as Alex. They bridged gaps between our designers and backend team effortlessly."</p>
                <div className="flex items-center gap-3">
                    <img src={Avatar2} className="w-10 h-10 rounded-full" />
                    <div>
                    <p className="font-bold">David L.</p>
                    <p className="text-sm text-[#C5C5C5] font-bold">Project Manager (CODSOFT)</p>
                    </div>
                </div>
                <FaQuoteRight className="text-[#FF8660] opacity-50 ml-auto" />

            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg w-[300px] shadow-md shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105 mx-auto my-4">
                
                <FaQuoteLeft className="text-[#FF8660] opacity-50" />
                <p className="my-4 italic text-white">"When our movie search feature broke days before launch, Hashim debugged the caching issue in 2 hours flat. They have a sixth sense for troubleshooting."</p>
                <div className="flex items-center gap-3">
                    <img src={Avatar6} className="w-10 h-10 rounded-full" />
                    <div>
                    <p className="font-bold">Elena R.</p>
                    <p className="text-sm text-[#C5C5C5] font-bold">Product Owner</p>
                    </div>
                </div>
                <FaQuoteRight className="text-[#FF8660] opacity-50 ml-auto" />

            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg w-[300px] shadow-md shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105 mx-auto my-4">
                
                <FaQuoteLeft className="text-[#FF8660] opacity-50" />
                <p className="my-4 italic text-white">"Hashim doesn’t just fix bugs—they analyze root causes. Their performance audit uncovered memory leaks we’d missed for months."</p>
                <div className="flex items-center gap-3">
                    <img src={Avatar4} className="w-10 h-10 rounded-full" />
                    <div>
                    <p className="font-bold">Technical Lead.</p>
                    <p className="text-sm text-[#C5C5C5] font-bold">Freelance Client</p>
                    </div>
                </div>
                <FaQuoteRight className="text-[#FF8660] opacity-50 ml-auto" />

            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg w-[300px] shadow-md shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105 mx-auto my-4">
                
                <FaQuoteLeft className="text-[#FF8660] opacity-50" />
                <p className="my-4 italic text-white">"Hashim’s attention to accessibility transformed our app. Their WCAG compliance fixes made our platform usable for 100K+ visually impaired users."</p>
                <div className="flex items-center gap-3">
                    <img src={Avatar7} className="w-10 h-10 rounded-full" />
                    <div>
                    <p className="font-bold">UI/UX Designer.</p>
                    <p className="text-sm text-[#C5C5C5] font-bold">Datathon Project</p>
                    </div>
                </div>
                <FaQuoteRight className="text-[#FF8660] opacity-50 ml-auto" />

            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg w-[300px] shadow-md shadow-zinc-100 transition-shadow duration-300 ease-in-out cursor-pointer hover:scale-105 mx-auto my-4">
                
                <FaQuoteLeft className="text-[#FF8660] opacity-50" />
                <p className="my-4 italic text-white">"From pixel-perfect layouts to intuitive interactions, Hashim’s frontend work feels crafted, not coded."</p>
                <div className="flex items-center gap-3">
                    <img src={Avatar5} className="w-10 h-10 rounded-full" />
                    <div>
                    <p className="font-bold">Creative Director.</p>
                    <p className="text-sm text-[#C5C5C5] font-bold">Open Source Maintainer</p>
                    </div>
                </div>
                <FaQuoteRight className="text-[#FF8660] opacity-50 ml-auto" />

            </div>

        </main>
    </section>
  )
}

export default Testimonials