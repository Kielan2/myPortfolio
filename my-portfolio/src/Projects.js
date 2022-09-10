import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className='projects'>
            <h2>Latest Projects</h2>
        <div className="project">
            <img src="/netflixclonescreenshot.png" alt="Netflix Clone"/>
            <h3><a href='https://kielanflix.netlify.app/'>Netflix Clone ></a></h3>
        </div>
        
        <div className="project">
            <h3><a href='https://kielanapi.netlify.app/'>Star Wars ></a></h3>
            <img src="/starWarsProject.png" alt="Star Wars API Project"/>
        </div>

        <div className="project">
            <img src="/musicPlayer.png" alt="Music Player"/>
            <h3><a href='https://kielanflix.netlify.app/'>Music Player ></a></h3>
        </div>
        <footer>
            <span>Kielan Anderson | 2022</span>
        </footer>
    </div>
  )
}

export default Projects