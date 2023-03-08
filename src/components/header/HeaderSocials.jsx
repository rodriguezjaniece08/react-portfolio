import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='https://github.com/rodriguezjaniece08' target='_blank'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/janice-rodriguez' target='_blank'><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials