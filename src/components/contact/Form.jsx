import React, { useRef, useState } from 'react';
import {FaArrowRight} from 'react-icons/fa'
import emailjs from '@emailjs/browser';


// form connected to email.js to handle user submission for contact session with no backend configuration.

 const Form = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    //function handles email submission through email.js
    emailjs.sendForm('service_ge7u44r', 'template_3iubivb', form.current, 't9zV-eFaLg-5QreOx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSubmitted(true);
      //resets the form after submission
      e.target.reset();
  };

 

  

  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
      <input id='name' name='user_name' type='text' required />
    
    <label for='email id='email-label>Email
      <input type="email" name="user_email" required />
    </label>

    <label>Message
    <textarea name="message" id='message' rows='10' cols='50' />
    </label>

   {submitted ? <div className='success'>Your Message Successfully Sent!</div> : null }
   <button className='btn mt-2'>Send <span className='submit-arrow'><FaArrowRight/></span></button>
  </form>
  )
}

export default Form