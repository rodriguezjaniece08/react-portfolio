import React from 'react'
import {BsLinkedin, BsGithub, BsWordpress} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='https://github.com/rodriguezjaniece08' target='_blank'><BsGithub size='1.2em' /></a>
        <a href='https://www.linkedin.com/in/janice-rodriguez' target='_blank'><BsLinkedin size='1.2em' /></a>
        <a href='https://rodriguezjaniece.wordpress.com/' target='_blank'><BsWordpress size='1.2em' /></a>
    </div>
  )
}

export default HeaderSocials