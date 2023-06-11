import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsWordpress} from 'react-icons/bs'


const Footer = () => {
  
  return (
    <section id='footer'>
      <div className="footer_socials">
       
        <a href='https://github.com/rodriguezjaniece08' target='_blank' rel='noreferrer' className='m-5'><BsGithub className='tags' size='2.2em' /></a>
        <a href='https://www.linkedin.com/in/janice-rodriguez' target='_blank' rel='noreferrer' className='m-5 '><BsLinkedin className='tags' size='2.2em' /></a>
        <a href='https://rodriguezjaniece.wordpress.com/' target='_blank' rel='noreferrer' className='m-5'><BsWordpress className='tags' size='2.2em' /></a>
     </div>
        <div className='copyright'>© Janice Rodriguez 2023</div>

       
    </section>
  )
}

export default Footer