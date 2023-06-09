import React from 'react';
import projectImg1 from '../../assets/projectImg1.png';
import projectImg2 from '../../assets/projectImg2.png';
import projectImg3 from '../../assets/projectImg3.png';
import projectImg4 from '../../assets/projectImg4.png';
import { CardBody, CardGroup, CardImg, CardText, CardTitle, Card } from 'reactstrap';




//project card component
const ProjectCardFront = () => {
  return(
    <>
   <CardGroup> 

    {/* Project card 1 */}

    <Card 
      body
      className="text-center m-3 pt-0"
      style={{
        width: '5rem',
        background: 'var(--color-bg-variant)'
      }}> 
      <CardImg
        alt="Image of Taskit App"
        src={projectImg1}
        style={{
          height:'23rem',
        }}
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
        <p><a href="https://rodriguezjaniece08.github.io/Final_Project/" className='btn my-4 card-btn' target='blank'>Check it Out</a></p>
      </CardBody>
    </Card>

        {/* Project card 2 */}

    <Card 
      body
      className="text-center m-3 pt-0"
      style={{
        width: '3rem',
        background: 'var(--color-bg-variant)'
      }}> 
      <CardImg
        alt="Image of Taskit App"
        src={projectImg2}
        style={{
          height:'23rem'
        }}
        top
        width="100%"
        />
      <CardBody>
        <CardTitle tag='h4'>
          LUCKY SHRUB
        </CardTitle>
        <CardText
          className='mb-2'
          tag='h6'
          >
            A Static client landing web page focused on the clients personal buisness of gardening .
          </CardText>
          <p><a href="https://rodriguezjaniece08.github.io/Final_Project/" className='btn my-4' target='blank'>Check it Out</a></p>
      </CardBody>
    </Card>
  </CardGroup>

  <CardGroup>

    {/* project card 3 */}

      <Card 
        body
        className="text-center m-3 pt-0"
        style={{
          width: '5rem',
          background: 'var(--color-bg-variant)'
        }}> 
        <CardImg
          alt="Image of Taskit App"
          src={projectImg3}
          style={{
            height:'23rem'
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag='h4'>
            Survey Form
          </CardTitle>
          <CardText
            className='mb-2'
            tag='h6'
            >
              A simple static survey form built with only CSS & HTML.
            </CardText>
          <p><a href="https://rodriguezjaniece08.github.io/Final_Project/" className='btn my-4' target='blank'>Check it Out</a></p>
        </CardBody>
      </Card>
          
          {/* project card 4 */}

      <Card 
        body
        className="text-center m-3 pt-0"
        style={{
          width: '3rem',
          background: 'var(--color-bg-variant)'
        }}> 
        <CardImg
          alt="Image of Taskit App"
          src={projectImg4}
          style={{
            height:'23rem'
          }}
          top
          width="100%"
          />
        <CardBody>
          <CardTitle tag='h4'>
            Jay's Pizza
          </CardTitle>
          <CardText
            className='mb-2'
            tag='h6'
            >
              A local restaurant website derived from UX principles. A focus on animation, image carousel, and a ordering form.
            </CardText>
            <p><a href="#" className='btn my-4 card-btn' target='blank'>Check it Out</a></p>
        </CardBody>
      </Card>

     </CardGroup>
              </>
   
  )
}

export default ProjectCardFront