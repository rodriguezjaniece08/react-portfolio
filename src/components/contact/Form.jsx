import React, { useRef } from 'react';
import {FaArrowRight} from 'react-icons/fa'
import emailjs from '@emailjs/browser';

 const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ge7u44r', 'template_3iubivb', form.current, 't9zV-eFaLg-5QreOx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
      <input id='name' type='text' required />
    
    <label for='email id='email-label>Email
      <input type="email" name="email" required />
    </label>
    <label>Message
    <textarea name="message" id='message' rows='10' cols='50' />
    </label>

   <button className='btn'>Send <span className='submit-arrow'><FaArrowRight/></span></button>
  </form>
  )
}

export default Form