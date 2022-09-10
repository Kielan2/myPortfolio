import React from 'react'
import './Body.css'
import Welcome from './Welcome'
import Projects from './Projects'
import About from './About'
import Hero from './Hero'

function Body() {
  return (
    <div className='body'>
        <Hero />
        <Welcome />
        <Projects />
        <About />
    </div>
  )
}

export default Body