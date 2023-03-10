import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import imgplaceholder from '../../assets/imgplaceholder.png'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h1 className='my-name'>Janice <br/> <span className='last-name'>Rodriguez</span></h1>
       
      <div className='description'>
        <h3 className='initial-name'>Janice<span className='color-dash'>/</span>R.</h3>
        <h5 className="text-light">/This is me </h5>
        <h3>Front-End Developer - UX Designer <br/> passionately learning, growing <br/> & experiencing.</h3>
        <p className='text-light'>Lorem ipsum dolor sit, amet consectetur <br/>adipisicing elit. Expedita iusto maxime <br/>provident impedit! 
          Non tempora excepturi <br/>deleniti quos repudiandae, in blanditiis <br/>commodi accusantium nisi iste quaerat 
          <br/>aliquid cum ullam eligendi?
        </p>
        <CTA />
      </div>
        <HeaderSocials />

      <div className="me">
        <img src={imgplaceholder} alt=''/>
      </div>

      <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

        
    

export default Header