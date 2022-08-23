import React from 'react'
import './Body.css'
import Welcome from './Welcome'
import Projects from './Projects'
import About from './About'

function Body() {
  return (
    <div className='body'>
        <Welcome />
        <Projects />
        <About />
    </div>
  )
}

export default Body