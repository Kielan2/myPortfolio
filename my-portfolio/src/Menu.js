import React from 'react'
import './Menu.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Menu() {
  return (
      <div className='menu'>
        <div className="border">
        <h1>Get in touch</h1>
        <span>Reach out and let's start a conversation!</span>
        
        <ul className="iconList">
            <li><a href='https://www.linkedin.com/in/kielan-anderson/'><LinkedInIcon fontSize='large' /></a>LinkedIn</li>
            <li><a href='https://github.com/Kielan2'><GitHubIcon fontSize='large' /></a>Github</li>
            <li><a href='mailto:kielananderson@gmail.com'><EmailIcon fontSize='large' /></a>Email</li>
        </ul>
        <ul className='infoList'>
        {/* <li>Based in: Salt Lake City, UT<br />(Open to Relocation)</li>
        {/* <li className='hover'><a href='https://www.linkedin.com/in/kielan-anderson/'>kielananderson@gmail.com</a></li>
        <li className='hover'><a href='tel:+13852269399'>(385) 226-9399</a></li> */} 
        </ul>
        
        </div>
    </div>
  )
}

export default Menu