import React from 'react'
import resume from '../../assets/resume.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download>Download Resume</a>
        <a href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA