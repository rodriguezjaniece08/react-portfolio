import React from 'react'
import {FiTerminal} from 'react-icons/fi'
import {TbTable} from 'react-icons/tb'


const ProjectLinks = () => {
  return (
    <div className='projects'>
        <div className='project-link front-end'>
            <FiTerminal size='1.9rem' className='frontend-icon' hoverColor='white'/>
            <h2>Front-End Developer.</h2>
            <p>10+ projects</p>
        </div>
        <div className='project-link ux'>
            <TbTable size='1.9rem' className='ux-icon'/>
            <h2>UX Designer.</h2>
            <p>4+ projects</p>
        </div>
    </div>
  )
}

export default ProjectLinks