import React from 'react'
import './contact.css'
import {FaArrowRight} from 'react-icons/fa'
import Form from './Form';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-grid grid1'>
        <h1>Let's <span className='connect-arrow'><FaArrowRight/></span><br/> Connect.</h1>
        <div>
          <p className='mt-5'>Imaginative front-end UX developer pursuing to create beautiful code with beautiful design. Actively pursing to better my craft, 
            have any advice or just want to say hi? I would love to hear from you! </p>
        </div>
          <h1 className='inq'>Inquiries</h1>
        <div className='circle'>
        <p className='open-to'>Open for <br/>new Projects.</p>
        </div>
      </div>
      

      <div className='contact-grid grid2'>
        {/* form connected to email.js */}
        <Form/>
      </div>
    
    
    </section>
  )
}

export default Contact
