import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {BiMessageSquareDetail, BiBook} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome size='1.2rem'/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook size='1.2rem'/></a>
      <a href='#projects'><FaLaptopCode size='1.2rem'/></a>
      <a href='#contact'><BiMessageSquareDetail size='1.2rem'/></a>
    </nav>
  )
}

export default Nav
      
      
