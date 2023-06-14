import React from 'react'
import './experience.css'
import ExperienceSkills from './ExperienceSkills'

//experiece component
const Experience = () => {
  return (
    <section id='experience'>
      <div className="grid-item item1">
        <h1>Experience</h1>
        {/* icon logos for skills/tools */}
        <ExperienceSkills />
      </div>
      
      <div className="grid-item item2">
        <h5 className='text-light'>/Problem solver</h5>
        <p className='exp-1'>
          Lorem ipsum dolor, sit amet consectetur 
          Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Saepe magnam quidem 
          iste numquam animi culpa, nisi 
          praesentium aliquam deserunt,</p>
          
        <p className='exp-2 text-light'> 
          officiis repellendus? 
          Incidunt facere praesentium dignissis id 
          Incidunt facere praesentium dignissis id 
          Incidunt facere praesentium dignissis id 
          Incidunt facere praesentium dignissis id 
          Incidunt facere praesentium dignissis id 
          officiis repellendus? 
          officiis repellendus? 
          dicta provident laboriosam amet.
          dicta provident laboriosam amet.
          </p>
      </div>
    </section>
  )
}

export default Experience