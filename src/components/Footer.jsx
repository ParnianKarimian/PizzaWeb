import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          
            <a href="https://www.instagram.com/parniankarimian_web?igsh=MTh0c2R4aXN6NDloYw==" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
            </a>
            <a href="https://github.com/ParnianKarimian" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/parnian-karimian-a73855285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </a>
        </div>
        <p>parniankarimian2005@gmail.com</p>
    </div>
  )
}

export default Footer;
