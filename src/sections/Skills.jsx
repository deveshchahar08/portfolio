import { div } from 'framer-motion/client'
import React from 'react'

const skills = [
    {category: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']},
    {category: 'Backend', items:['Node.js', 'Express.js', 'REST APIs', 'JWT Auth']},
    {category: 'Database', items: ['MongaDB', 'Mongoose', 'MySQL']},
    {category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel']}
]

const Skills = () => {
  return (
    <section id='skills' className='px-10 py-20 bg-gray-950 text-white '>
        <h2 className='text-3xl font-bold mb-2'>Skills</h2>
        <div className='w-16 h-1 bg-purple-500 mb-10'></div>
        <div className='grid grid-cols-2 gap-8'>
        {skills.map((skill)=>(
            <div key={skill.category} className='bg-gray-900 p-6 rounded-xl border border-gray-800 '>
                <h3 className='text-purple-400 font-semibold mb-4'>{skill.category}</h3>
                <div className='flex flex-wrap gap-2'>
                    {skill.items.map((item)=>(
                        <span key={item} className='bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm'>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        ))}
         </div>        
    </section>

 )
}



export default Skills