import React from 'react'
import {BsLinkedin, BsGithub, BsWordpress} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='https://github.com/rodriguezjaniece08' target='_blank'><BsGithub className='header-tags'size='1.5em' /></a>
        <a href='https://www.linkedin.com/in/janice-rodriguez' target='_blank'><BsLinkedin className='header-tags' size='1.5em' /></a>
        <a href='https://rodriguezjaniece.wordpress.com/' target='_blank'><BsWordpress className='header-tags' size='1.5em' /></a>
    </div>
  )
}

export default HeaderSocials