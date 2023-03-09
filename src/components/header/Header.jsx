import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import imgplaceholder from '../../assets/imgplaceholder.png'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1 className='my-name'>Janice <br/> <span className='last-name'>Rodriguez</span></h1>
       
      <div>
        <h5 className="text-light">Front-end Developer / Ux Designer</h5>
      </div>

        <CTA />
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