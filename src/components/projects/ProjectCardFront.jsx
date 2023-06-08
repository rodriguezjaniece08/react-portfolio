import React from 'react';
import projectImg1 from '../../assets/projectImg1.png';
import { CardBody, CardGroup, CardImg, CardText, CardTitle, Card } from 'reactstrap';




//project card component
const ProjectCardFront = () => {
  return(
    <>
   <CardGroup>
    <Card 
      body
      className="text-center m-3"
      style={{
        width: '5rem',
        background: 'var(--color-bg-variant)'
      }}> 
      <CardImg
        alt="Image of Taskit App"
        src={projectImg1}
        style={{
          height:'23rem'
        }}
        top
        width="100%"
        />
      <CardBody>
        <CardTitle tag='h4'>
          TaskIT
        </CardTitle>
        <CardText
          className='mb-2'
          tag='h6'
          >
            A task Management Application intended for individual or group use for managing any task built with love as a team.
          </CardText>
        <p><a href="https://rodriguezjaniece08.github.io/Final_Project/" target='blank'>Check it Out</a></p>
      </CardBody>
    </Card>

    <Card 
      body
      className="text-center m-3"
      style={{
        width: '3rem',
        background: 'var(--color-bg-variant)'
      }}> 
      <CardImg
        alt="Image of Taskit App"
        src={projectImg1}
        style={{
          height:'23rem'
        }}
        top
        width="100%"
        />
      <CardBody>
        <CardTitle tag='h4'>
          TaskIT
        </CardTitle>
        <CardText
          className='mb-2'
          tag='h6'
          >
            A task Management Application intended for individual or group use for managing any task.
          </CardText>
      </CardBody>
    </Card>
  </CardGroup>

      <CardGroup>
      <Card 
        body
        className="text-center m-3"
        style={{
          width: '5rem',
          background: 'var(--color-bg-variant)'
        }}> 
        <CardImg
          alt="Image of Taskit App"
          src={projectImg1}
          style={{
            height:'23rem'
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag='h4'>
            TaskIT
          </CardTitle>
          <CardText
            className='mb-2'
            tag='h6'
            >
              A task Management Application intended for individual or group use for managing any task built with love as a team.
            </CardText>
          <p><a href="https://rodriguezjaniece08.github.io/Final_Project/" target='blank'>Check it Out</a></p>
        </CardBody>
      </Card>
  
      <Card 
        body
        className="text-center m-3"
        style={{
          width: '3rem',
          background: 'var(--color-bg-variant)'
        }}> 
        <CardImg
          alt="Image of Taskit App"
          src={projectImg1}
          style={{
            height:'23rem'
          }}
          top
          width="100%"
          />
        <CardBody>
          <CardTitle tag='h4'>
            TaskIT
          </CardTitle>
          <CardText
            className='mb-2'
            tag='h6'
            >
              A task Management Application intended for individual or group use for managing any task.
            </CardText>
        </CardBody>
      </Card>

     </CardGroup>
              </>
   
  )
}

export default ProjectCardFront