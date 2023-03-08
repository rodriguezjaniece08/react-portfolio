import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>Janice <br/> Rodriguez</h1>
      </div>
      <div>
        <h5 className="text-light">Front-end Developer / Ux Designer</h5>
        <CTA />
      </div>
    </header>
  )
}
        
    

export default Header