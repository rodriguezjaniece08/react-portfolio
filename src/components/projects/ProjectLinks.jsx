import React from 'react'
import {FiTerminal} from 'react-icons/fi'
import {TbTable} from 'react-icons/tb'


const ProjectLinks = () => {
  return (
    <div className='projects'>
        <div className='project-link front-end'>
          <div>
            <FiTerminal size='1.9rem'className='frontend-icon'/>
            <h2>Front-End Developer.</h2>
            <p>Projects</p>
          </div>
        </div>
        <div className='project-link ux'>
          <div>
            <TbTable size='1.9rem' className='ux-icon'/>
            <h2>UX Designer.</h2>
            <p>Projects</p>
          </div>
        </div>
    </div>
  )
}

export default ProjectLinks