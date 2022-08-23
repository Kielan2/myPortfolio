import React from 'react'
import './Menu.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Menu() {
  return (
      <div className='menu'>
        <div className="border">
        <div>
        <h1>Get in touch</h1>
        <span>Reach out and let's start a conversation!</span>
        </div>
        <ul className="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>SEO</li>
            <li>UX/UI</li>
        </ul>
        
        <ul className="iconList">
            <li><a href='https://www.linkedin.com/in/kielan-anderson/'><LinkedInIcon fontSize='large' /></a></li>
            <li><a href='https://github.com/Kielan2'><GitHubIcon fontSize='large' /></a></li>
            <li><a href='mailto:kielananderson@gmail.com'><EmailIcon fontSize='large' /></a></li>
        </ul>
        
        
        </div>
    </div>
  )
}

export default Menu