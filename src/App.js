import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Footer from './sections/Footer'


function App(){
  return (
    
    <div className='app bg-black min-h-screen'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  
  )
}

export default App 