import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {BiMessageSquareDetail, BiBook} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href='#home'><AiOutlineHome/></a>
      <a href='#experience'><BiBook/></a>
      <a href='#projects'><FaLaptopCode/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
