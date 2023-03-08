import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Janice <br/> Rodriguez</h1>
      </div>
      <div>
        <h5 className="text-light">Front-end Developer / Ux Designer</h5>
      </div>
        <CTA />
        <HeaderSocials />
      <div className="me">
        <img src='' alt=''/>
      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </header>
  )
}
       
        
    

export default Header