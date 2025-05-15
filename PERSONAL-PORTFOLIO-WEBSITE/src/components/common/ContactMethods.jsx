import React from 'react'
import Button from './Button'

function ContactMethods() {
  return (
    <section className='mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80 my-4 text-center'>
        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#D5491D] font-bold text-xl md:text-2xl text-center my-10'>Contact Methods</h3>

        <p data-testID="Email" className='text-white font-serif font-bold text-sm'>Email:
            <span className='text-[#6283ad]'> bayahashim40@gmail.com</span>
        </p>
        <p data-testID="Phone" className='text-white font-serif font-bold text-sm'>Phone: 
            <span className='text-[#6283ad]'>   +254 797 749 346</span>
            <span>   |</span>
            <span className='text-[#6283ad]'>   +254 113 747 654</span>
            <span>   |</span>
            <span className='text-[#6283ad]'>   +254 734 611 235</span>
        </p>
        <h4 className='font-bold text-lg text-white mt-8'>🗓 *"Book a 15-minute chat"*</h4>
        <p data-testID="paragraph" className='text-[#C5C5C5] font-serif text-sm'>*Click the button below to schedule a quick chat with me.*</p>

        <div className='flex flex-col md:flex-row gap-4 w-full justify-center md:mt-4 mt-4 '>
            <Button Message='Send Email' buttonVariant='Primary' onClick={() => window.open('mailto:bayahashim40@gmail.com', '_blank')}/>
            <Button Message='Schedule Meeting' buttonVariant='Secondary' onClick={() => window.open('https://calendly.com/bayahashim40', '_blank')}/>
        </div>
     
    </section>
  )
}

export default ContactMethods