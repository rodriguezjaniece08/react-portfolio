import React from 'react'
import './contact.css'
import {FaArrowRight} from 'react-icons/fa'
import Form from './Form';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-grid grid1'>
      <h1>Let's <span className='connect-arrow'><FaArrowRight/></span><br/> Connect.</h1>
      </div>

      <div className='contact-grid grid2'>
        <Form/>
      </div>
    
    
    </section>
  )
}

export default Contact
