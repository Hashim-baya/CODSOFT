import React from 'react'
import { Link } from 'react-router'

function NavBar() {

    const linkStyles = 'text-cyan-200 hover:text-cyan-400 font-mono'

  return (
    <section>
        <div className='bg-[#222222] text-cyan-200 text-[0.9rem] text-center py-4'>
            <nav className='flex justify-center space-x-6'>
                <Link className={linkStyles} to="/">HOME</Link>
                <Link  className={linkStyles} to="/about">ABOUT</Link>
                <Link  className={linkStyles} to="/projects">PROJECTS</Link>
                <Link  className={linkStyles} to="/contact">CONTACT</Link>
            </nav>
        </div>
    </section>
  )
}

export default NavBar