import React from 'react'
import {TbBrandHtml5,TbBrandCss3, TbBrandJavascript, TbBrandBootstrap, TbBrandAdobe} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {DiPhotoshop} from 'react-icons/di'
import {FaFigma} from 'react-icons/fa'

const ExperienceSkills = () => {
  return (
    <div className='experience_skills'>
        <ul className="skills_container">
            <li>
                <span className='development-skills'><TbBrandHtml5 size='4.5rem'/> </span>
                <div>HTML</div>
            </li>
            <li>
                <span className='development-skills'><TbBrandCss3 size='4.5rem'/> </span>   
                <div>CSS</div>
            </li>
             
            <li>
                <span className='development-skills'><TbBrandJavascript size='4.5rem' /></span>  
                <div>JavaScript</div>
            </li>
               
            <li>
                <span className='development-skills'><FaReact size='4.5rem'/></span>  
                <div>React</div>
            </li>
                
            <li>
                <span className='development-skills'><TbBrandBootstrap size='4.5rem' /></span> 
                <div>BootStrap</div>
            </li>
        </ul>

        <ul className="skills_container">
            <li>
                <span className='ux-skills'><FaFigma size='4.5rem'/> </span>
                <div>Figma</div>
            </li>
            <li>
                <span className='ux-skills'><TbBrandAdobe size='4.5rem'/> </span>   
                <div>Adobe XD</div>
            </li>

            <li>
                <span className='ux-skills'><DiPhotoshop size='4.5rem'/> </span>   
                <div>PhotoShop</div>
            </li>
        </ul>
    </div>

    
    
  )
}

export default ExperienceSkills
                
        
        
        
       
        
        
        
        
