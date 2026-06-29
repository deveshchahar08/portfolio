
import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
    const navLinks = [
        {name: 'About', id: 'hero'},
        {name: 'Skills', id: 'skills'},
        {name: 'Experience', id: 'experience'},
        {name: 'Education', id: 'education'},
        {name: 'Projects', id: 'projects'},
        {name: 'Contact', id: 'contact'},
    ]
  return (
    <nav className='sticky top-0 z-50 flex justify-between items-center px-10 py-5 bg-black text-white border-b border-gray-800'>
        <div className='text-2xl font-bold text-purple-500'>DC</div>
        <ul className='flex gap-8 list-none'>
            {navLinks.map((link) =>(
                <li key={link.id}>
                    <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass='text-purple-400 border-b-2 border-purple-400'
                    className="pb-1 text-gray-400 hover:text-purple-400 transition cursor-pointer"
                    >
                        {link.name}
                    
                    </Link>

                </li>
            ))}

             <li>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition cursor-pointer"
                    >
                        Let's Connect
                    </Link>
                </li>

        </ul>

    </nav>
  )
}

export default Navbar