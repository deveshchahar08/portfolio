import { div, section, title } from 'framer-motion/client'
import React from 'react'

const projects = [
    {
        title: 'task Manager App',
        desc: 'Full Stack MERN app with JWt auth, task CRUD operatiions and protected routes',
        tech: ['React', 'Node,js', 'Express', 'MongoDB'],
        github: 'https://github.com/deveshchahar08',
        live: '#',
    },
    {
        title: 'E-Commerce Product Listing',
        desc: 'React frontend with product listinng , search, filter and cart functionality.',
        tech: ['React', 'Node,js', 'Express', 'MongoDB'],
        github: 'https://github.com/deveshchahar08',
        live: '#',
    }
]

const Projects = () => {
  return (
    <section id='projects' className='px-10 py-20 bg-black text-white'>
        <h2 className='text-3xl font-bold mb-2 '>Projects</h2>
        <div className='w-16 h-1 bg-purple-500 mb-10'></div>
        <div className='grid grid-cols-2 gap-8'>
            {projects.map((project)=>(
                <div key={project.title} className='bg-gray-900 p-6 rounded-xl border border-gray-800'>
                    <h3 className='text-xl font-semibold text-purple-400 mb-2'>{project.title}</h3>
                    <p className='text-gray-400 text-sm mb-4'>{project.desc}</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {project.tech.map((t)=>(
                            <span key={t} className='bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm '>{t}</span>
                        ))}
                    </div>
                    <div className='flex gap-4'>
                        <a href="{project.github}" target='_blank' rel='norferrer' className='text-purple-400 hover:purple-300 text-sm transition'>Github →</a>
                        <a href="{project.live}" className='text-purple-400 hover:text-purple-300 text-sm transition '>Live →</a>
                    </div>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Projects