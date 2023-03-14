import React from 'react'
import {TbBrandHtml5,TbBrandCss3, TbBrandJavascript, TbBrandBootstrap} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'

const ExperienceSkills = () => {
  return (
    <div className='experience_skills'>
        <ul className="skills_container">
            <li>
                <a><TbBrandHtml5 size='3.5rem'/> </a>
                <div>HTML</div>
            </li>
            <li>
                <a><TbBrandCss3 size='3.5rem'/> </a>   
                <div>CSS</div>
            </li>
             
            <li>
                <a><TbBrandJavascript size='3.5rem' /></a>  
                <div>JavaScript</div>
            </li>
               
            <li>
                <a><FaReact size='3.5rem'/></a>  
                <div>React</div>
            </li>
                
            <li>
                <a><TbBrandBootstrap size='3.5rem' /></a> 
                <div>BootStrap</div>
            </li>
        </ul>
    </div>
  )
}

export default ExperienceSkills
                
        
        
        
       
        
        
        
        
