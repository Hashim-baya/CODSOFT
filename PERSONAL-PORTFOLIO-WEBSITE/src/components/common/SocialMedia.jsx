import React from 'react'
import {  FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

function SocialMedia() {
  return (
    <section className='mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80 my-4'>
        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#5BADFF] to-[#1373D1] font-bold text-xl md:text-2xl text-center mt-10 mb-5'>Social Media</h3>
        <p className='text-[#C5C5C5] font-serif text-sm text-center'>*Connect with me on social media platforms*</p>

    <div className='flex justify-center items-center gap-4 mt-10 mb-15'>
        <a href="https://github.com/hashim-baya" target='_blank'>
            <FaGithub className='text-2xl hover:text-4xl text-[#C5C5C5]'/>
        </a>
        <a href="#" target='_blank'>
            <FaInstagram className='text-2xl hover:text-4xl text-[#D5491D]'/>
        </a>
        <a href="https://www.linkedin.com/in/hashim-baya/" target='_blank'>
            <FaLinkedin className='text-2xl hover:text-4xl text-[#3650df]'/>
        </a>
        <a href="#" target='_blank'>
            <FaTwitter className='text-2xl hover:text-4xl text-[#50a4e9]'/>
        </a>
    </div>

    <p className='text-[#C5C5C5] font-serif text-sm  mt-4'>*Feel free to reach out for collaborations, inquiries, or just a friendly chat!*</p>
    <p className='text-[#C5C5C5] font-serif text-sm  mt-4'>🌍 *"Based in Nairobi, Kenya (GMT+3). Available for remote work worldwide."*</p>
    <p className='text-[#C5C5C5] font-serif text-sm  mt-4'>⏳ "I typically reply within 24–48 hours."</p>
    <p className='text-[#C5C5C5] font-serif text-sm  mt-4'>🔒 "Your data is safe. I won’t share your details with anyone."</p>
    <p className='text-[#C5C5C5] font-serif text-sm  mt-4'>📅 "Let’s connect and explore opportunities!"</p>
       
    </section>
  )
}

export default SocialMedia