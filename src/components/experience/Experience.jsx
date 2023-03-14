import React from 'react'
import './experience.css'
import ExperienceSkills from './ExperienceSkills'


const Experience = () => {
  return (
    <section id='experience'>
      <div className="grid-item item1">
        <h1>Experience</h1>
        <ExperienceSkills />
      
      </div>
      <div className="grid-item item2">
        <h5>/Problem solver</h5>
        <p>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. 
          Saepe magnam quidem 
          praesentium aliquam deserunt, iste numquam 
          animi culpa, nisi 
          officiis repellendus? 
          Incidunt facere praesentium dignissis id 
          dicta provident 
          laboriosam amet.</p>
      </div>
    </section>
  )
}

export default Experience