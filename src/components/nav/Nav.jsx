import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {BiMessageSquareDetail, BiBook} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href='#home'><AiOutlineHome size='1.2rem'/></a>
      <a href='#experience'><BiBook size='1.2rem'/></a>
      <a href='#projects'><FaLaptopCode size='1.2rem'/></a>
      <a href='#contact'><BiMessageSquareDetail size='1.2rem'/></a>
    </nav>
  )
}

export default Nav
      
      
